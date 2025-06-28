import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { FotoService } from './foto.service';
import { CreateFotoDto } from './dto/create-foto.dto';

@Controller('foto')
export class FotoController {
  constructor(private readonly fotoService: FotoService) {}

  @Post()
  create(@Body() createFotoDto: CreateFotoDto) {
    return this.fotoService.create(createFotoDto);
  }

  @Get('album/:albumId')
  findAllByAlbum(@Param('albumId', ParseIntPipe) albumId: number) {
    return this.fotoService.findAllByAlbum(albumId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fotoService.remove(id);
  }

  @Patch(':id/selecionar')
  toggleSelecao(@Param('id', ParseIntPipe) id: number) {
    return this.fotoService.toggleSelecao(id);
  }
}
