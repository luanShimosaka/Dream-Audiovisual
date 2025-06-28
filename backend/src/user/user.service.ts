import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // CREATE
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Antes de salvar a senha Hasheamos ela
    const saltOrRounds = 10;
    const senhaHasheada = await bcrypt.hash(createUserDto.senha, saltOrRounds);

    //Criação de um novo objeto substituindo a senha pura pela Hasheada
    const user = this.userRepository.create({
    ...createUserDto,
    senha: senhaHasheada,
  });

    return this.userRepository.save(user);
  }

  // READ (Todos)
  async findAll(
    nome?: string,
    email?: string,
    page = 1,
    limit = 10,
  ): Promise<{ data: Partial<User>[]; total: number; page: number; limit: number }> {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (nome) {
      where.nome = Like(`%${nome}%`);
    }
    if (email) {
      where.email = Like(`%${email}%`);
    }

    const [result, total] = await this.userRepository.findAndCount({
      where,
      order: { nome: 'ASC' }, // Ordena por nome para uma lista consistente
      skip,
      take: limit,
    });

    // Mapeia o resultado para retornar apenas os campos da tabela de visualização
    const data = result.map(({ id, nome, email, telefone }) => ({
      id,
      nome,
      email,
      telefone,
    }));

    return { data, total, page, limit };
  }

  // READ (Por id)
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuário com o ID #${id} não encontrado.`);
    }
    // Retorna o usuário completo para a tela de detalhes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { senha, ...result } = user; // Remove a senha do retorno
    return result as User;
  }

  // UPDATE
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // Se a senha for atualizada, ela precisa ser hasheada novamente
    if (updateUserDto.senha) {
      const saltOrRounds = 10;
      updateUserDto.senha = await bcrypt.hash(updateUserDto.senha, saltOrRounds);
    }

    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`Usuário com o ID #${id} não encontrado.`);
    }
    return this.userRepository.save(user);
  }

  // DELETE
  async remove(id: number): Promise<{ message: string }> {
    const user = await this.findOne(id); // Reutiliza o findOne para checar se o usuário existe
    await this.userRepository.remove(user);
    return { message: `Usuário com o ID #${id} deletado com sucesso.` };
  }

  // Método para buscar o email na autenticação
  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }
}