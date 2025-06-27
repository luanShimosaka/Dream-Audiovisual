import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  // Injetando o UserService para ter acesso aos métodos de busca de usuário
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async login(loginDto: LoginDto): Promise<{ message: string; user: any; access_token: string }> {
    //Buscando usuário pelo e-mail
    const user = await this.userService.findByEmail(loginDto.email);
    
    if (!user) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }
    //Fazendo comparação com a senha fornecida e do banco de dados.
    const isPasswordMatching = await bcrypt.compare(loginDto.senha, user.senha);

    if (!isPasswordMatching) {
      throw new UnauthorizedException('E-mail ou senha inválidos.');
    }

    const payload = { sub: user.id, username: user.nome };

    const accessToken = await this.jwtService.signAsync(payload);
    
    const { senha, ...result } = user;
    //Com todas validações retorna que o Login foi realizado com sucesso
    return {
      message: 'Login realizado com sucesso!',
      user: result,
      access_token: accessToken,
    };
  }

}