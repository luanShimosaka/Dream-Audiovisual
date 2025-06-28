import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
import { Agendamento } from './entities/agendamento.entity';

@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
  ) {}

  //CREATE
  async create(createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    const { data, hora, ...rest } = createAgendamentoDto;
    const dataHoraAgendamento = new Date(`${data}T${hora}`);

    await this.validarAgendamento(dataHoraAgendamento);

    //Se passou pela validação, cria e salva
    const novoAgendamento = this.agendamentoRepository.create({
      ...rest,
      data,
      hora
    });

    return this.agendamentoRepository.save(novoAgendamento);
  }

  //READ (Todos)
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoRepository.find();
  }

  //READ (Por ID)
  async findOne(id: number): Promise<Agendamento> {
    const agendamento = await this.agendamentoRepository.findOne({ where: { id } });
    if (!agendamento) {
      throw new NotFoundException(`Agendamento com o ID #${id} não encontrado.`);
    }
    return agendamento;
  }

  //UPDATE
  async update(id: number, updateAgendamentoDto: UpdateAgendamentoDto): Promise<Agendamento> {
    const agendamento = await this.agendamentoRepository.preload({
      id: id,
      ...updateAgendamentoDto,
    });

    if (!agendamento) {
      throw new NotFoundException(`Agendamento com o ID #${id} não encontrado.`);
    }

    //Se o usuário alterou a data ou a hora recalcula o campo dataHora
    if (updateAgendamentoDto.data || updateAgendamentoDto.hora) {
      const novaData = updateAgendamentoDto.data || agendamento.data;
      const novaHora = updateAgendamentoDto.hora || agendamento.hora;
      const dataHoraValidacao = new Date(`${novaData}T${novaHora}`);

      //valida novo horário
      await this.validarAgendamento(dataHoraValidacao, agendamento.id);

      //atualiza os campos
      agendamento.data = novaData;
      agendamento.hora = novaHora;
    }

    //Chamada da validação
    const dataHoraValidacao = new Date(`${agendamento.data}T${agendamento.hora}`);
    await this.validarAgendamento(dataHoraValidacao, agendamento.id);

    //Se passou na validação, salva as alterações
    return this.agendamentoRepository.save(agendamento);
  }

  //DELETE
  async remove(id: number): Promise<{ message: string }> {
    const agendamento = await this.findOne(id);
    await this.agendamentoRepository.remove(agendamento);
    return { message: `Agendamento com o ID #${id} deletado com sucesso.` };
  }

  //Método de validação de agendamento
  private async validarAgendamento(dataHora: Date, idExcecao?: number): Promise<void> {
    //Valida a data e hora que devem ser no futuro
    const agora = new Date();
    if (dataHora <= agora) {
      throw new BadRequestException('A data e hora do agendamento devem ser futuras.');
    }

    //Verificar conflitos de horário
    const umaHora = 1 * 60 * 60 * 1000;
    const umaHoraAntes = new Date(dataHora.getTime() - umaHora);
    const umaHoraDepois = new Date(dataHora.getTime() + umaHora);

    const antesDate = umaHoraAntes.toISOString().slice(0, 10);
    const antesTime = umaHoraAntes.toTimeString().slice(0, 8);

    const depoisDate = umaHoraDepois.toISOString().slice(0, 10);
    const depoisTime = umaHoraDepois.toTimeString().slice(0, 8);

    const query = this.agendamentoRepository
      .createQueryBuilder('agendamento')
      .where('(agendamento.data = :dataAntes AND agendamento.hora >= :horaAntes)', { dataAntes: antesDate, horaAntes: antesTime })
      .andWhere('(agendamento.data = :dataDepois AND agendamento.hora <= :horaDepois)', { dataDepois: depoisDate, horaDepois: depoisTime });


    //Se estivermos atualizando (um idExcecao foi passado),
    //Ignora o próprio agendamento na verificação de conflito.
    if (idExcecao) {
      query.andWhere('agendamento.id != :id', { id: idExcecao });
    }

    const conflito = await query.getOne();

    if (conflito) {
      throw new BadRequestException(
        'Conflito de horário. Já existe um agendamento em um intervalo de 1 hora para o horário solicitado.',
      );
    }
  }
}
