import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // CREATE
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
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
}