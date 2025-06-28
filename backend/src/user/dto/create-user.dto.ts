import { IsEmail, IsNotEmpty, MinLength, IsString, IsOptional, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  nome: string;

  @IsEmail({}, { message: 'Forneça um endereço de e-mail válido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  senha: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  datanascimento?: Date;
}