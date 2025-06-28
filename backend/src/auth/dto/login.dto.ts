import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Por favor, forneça um e-mail válido.' })
  @IsNotEmpty({ message: 'O campo e-mail não pode ser vazio.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio.' })
  senha: string;
}