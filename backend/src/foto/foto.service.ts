import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumService } from '../album/album.service';
import { CreateFotoDto } from './dto/create-foto.dto';
import { Foto } from './entities/foto.entity';
@Injectable()
export class FotoService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotoRepository: Repository<Foto>,
    private readonly albumService: AlbumService,
  ) {}

  async create(createFotoDto: CreateFotoDto): Promise<Foto> {
    const { albumId, ...restOfDto } = createFotoDto;

    const album = await this.albumService.findOne(albumId);

    const novaFoto = this.fotoRepository.create({
      ...restOfDto,
      album: album, //Associa a foto ao álbum encontrado.
    });

    return this.fotoRepository.save(novaFoto);
  }

  //Método para encontrar todas as fotos de um álbum específico.
  findAllByAlbum(albumId: number): Promise<Foto[]> {
    return this.fotoRepository.find({
      where: { album: { id: albumId } },
    });
  }

  async findOne(id: number): Promise<Foto> {
    const foto = await this.fotoRepository.findOne({ where: { id } });
    if (!foto) {
      throw new NotFoundException(`Foto com o ID #${id} não encontrada.`);
    }
    return foto;
  }

  async remove(id: number): Promise<{ message: string }> {
    const foto = await this.findOne(id);
    await this.fotoRepository.remove(foto);
    return { message: `Foto com o ID #${id} deletada com sucesso.` };
  }

  async toggleSelecao(id: number): Promise<Foto> {
    //Busca a foto para garantir que ela existe.
    const foto = await this.findOne(id);

    //Se era 'false', vira 'true'. Se era 'true', vira 'false'.
    foto.selecionada = !foto.selecionada;

    return this.fotoRepository.save(foto);
  }
}
