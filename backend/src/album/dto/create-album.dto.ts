import { IsNotEmpty, IsString, IsOptional, IsNumber, Max, Min } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsOptional()
  cliente?: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @IsNotEmpty()
  agendamentoId: number;

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsNumber({}, { message: 'A avaliação deve ser um número.' })
  @Min(1, { message: 'A avaliação não pode ser menor que 1.' })
  @Max(5, { message: 'A avaliação não pode ser maior que 5.' })
  @IsOptional()
  avaliacao?: number;
}
