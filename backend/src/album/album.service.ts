import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamentoService } from '../agendamento/agendamento.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumService {
  //Injeção do repositório de Album e o serviço de Agendamento.
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
    private readonly agendamentoService: AgendamentoService,
  ) {}

  async create(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const { agendamentoId, ...restOfDto } = createAlbumDto;

    const agendamento = await this.agendamentoService.findOne(agendamentoId);

    const novoAlbum = this.albumRepository.create({
      ...restOfDto,
      agendamento: agendamento,
    });

    return this.albumRepository.save(novoAlbum);
  }

  findAll(): Promise<Album[]> {
    //Para que inclusão do objeto de agendamento aninhado é utilizado relations
    return this.albumRepository.find({
      relations: ['agendamento'],
    });
  }

  async findOne(id: number): Promise<Album> {
    const album = await this.albumRepository.findOne({
      where: { id },
      relations: ['agendamento'],
    });

    if (!album) {
      throw new NotFoundException(`Álbum com o ID #${id} não encontrado.`);
    }
    return album;
  }

  async update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const { agendamentoId, ...restOfDto } = updateAlbumDto;

    const album = await this.albumRepository.preload({
      id: id,
      ...restOfDto,
    });

    if (!album) {
      throw new NotFoundException(`Álbum com o ID #${id} não encontrado.`);
    }

    if (agendamentoId) {
      const agendamento = await this.agendamentoService.findOne(agendamentoId);
      album.agendamento = agendamento;
    }

    return this.albumRepository.save(album);
  }

  async remove(id: number): Promise<{ message: string }> {
    const album = await this.findOne(id);
    await this.albumRepository.remove(album);
    return { message: `Álbum com o ID #${id} deletado com sucesso.` };
  }
}
