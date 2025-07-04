import { Album } from '../../album/entities/album.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'fotos' })
export class Foto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ type: 'boolean', default: false })
  selecionada: boolean;
  
  @ManyToOne(() => Album, (album) => album.fotos)
  album: Album;
}
