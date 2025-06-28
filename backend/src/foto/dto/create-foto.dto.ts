import { IsNotEmpty, IsString, IsUrl, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateFotoDto {
  @IsUrl({}, { message: 'A URL fornecida não é válida.'})
  @IsNotEmpty()
  url: string;
  
  @IsNumber()
  @IsNotEmpty()
  albumId: number;

  @IsBoolean({ message: 'O campo selecionada deve ser um booleano (true ou false).' })
  @IsOptional() // O campo é opcional, pois já temos um valor padrão na entidade.
  selecionada?: boolean;
}
