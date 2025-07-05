import { Agendamento } from '../../agendamento/entities/agendamento.entity';
import { Foto } from '../../foto/entities/foto.entity';
import { User } from '../../user/entities/user.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'albuns' }) 
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column({ nullable: true })
  cliente: string;

  @Column()
  descricao: string;

  @Column()
  categoria: string;

  @Column({ type: 'int', nullable: true })
  avaliacao: number;
  
  @ManyToOne(() => User, (user) => user.albuns)
  user: User;

  @OneToOne(() => Agendamento)

  @JoinColumn()
  agendamento: Agendamento;

  @OneToMany(() => Foto, (foto) => foto.album, {
    cascade: true, //cascade: Se deletarmos um álbum, todas as fotos associadas também serão deletadas.
  })
  fotos: Foto[]; //A estrutura do album será um array de Fotos.
}
