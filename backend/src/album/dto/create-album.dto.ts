<<<<<<< HEAD
import { IsNotEmpty, IsString, IsOptional, IsNumber, Max, Min } from 'class-validator';
=======
import { IsNotEmpty, IsString, IsOptional, IsNumber, Min, Max } from 'class-validator';
>>>>>>> aabd535a5fa64b2c39b7c5248673ca8031ea8cfa

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

  @IsNumber({}, { message: 'A avaliação deve ser um número.' })
  @Min(1, { message: 'A avaliação não pode ser menor que 1.' })
  @Max(5, { message: 'A avaliação não pode ser maior que 5.' })
  @IsOptional()
  avaliacao?: number;
}
