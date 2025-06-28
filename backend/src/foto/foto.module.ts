import { Module } from '@nestjs/common';
import { FotoService } from './foto.service';
import { FotoController } from './foto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foto } from './entities/foto.entity';
import { AlbumModule } from '../album/album.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Foto]),
    AlbumModule,
  ],
  controllers: [FotoController],
  providers: [FotoService],
})
export class FotoModule {}