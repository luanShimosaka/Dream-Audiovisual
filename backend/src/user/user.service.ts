import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  // READ (All)
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // READ (One by ID)
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuário com o ID #${id} não encontrado.`);
    }
    return user;
  }

  // UPDATE
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // O `preload` busca o usuário pelo ID e aplica as alterações do DTO.
    // Se o usuário não existir, ele retorna undefined.
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