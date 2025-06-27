import { IsNotEmpty, IsString, IsUrl, IsNumber, IsOptional } from 'class-validator';

export class CreateFotoDto {
  @IsUrl({}, { message: 'A URL fornecida não é válida.'})
  @IsNotEmpty()
  url: string;
  
  @IsNumber()
  @IsNotEmpty()
  albumId: number;
}
