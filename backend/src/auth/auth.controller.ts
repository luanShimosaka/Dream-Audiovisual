import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth') // Define que todas as rotas deste controller começarão com /auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // Define a rota como POST /auth/login
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto) {
    // @Body() extrai o body da requisição e o valida usando o LoginDto
    return this.authService.login(loginDto);
  }
}

