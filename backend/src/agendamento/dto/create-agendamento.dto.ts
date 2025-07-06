import { IsNotEmpty, IsString, IsDateString, Matches, IsOptional } from 'class-validator';

export class CreateAgendamentoDto {
  @IsNotEmpty({ message: 'O título não pode ser vazio.' })
  titulo: string;

  @IsNotEmpty({ message: 'A descrição não pode ser vazia.' })
  descricao: string;

  @IsDateString({}, { message: 'A data deve estar no formato YYYY-MM-DD.' })
  @IsNotEmpty({ message: 'A data não pode ser vazia.' })
  data: Date;

  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'A hora deve estar no formato HH:MM (ex: 14:30).',
  })
  @IsNotEmpty({ message: 'A hora não pode ser vazia.' })
  hora: string;

  @IsNotEmpty({ message: 'O local precisa ser específicado.' })
  local: string;

  @IsOptional()
  @IsString({ message: 'O nome do cliente deve ser composto somente de letras.' })
  cliente?: string;
}
