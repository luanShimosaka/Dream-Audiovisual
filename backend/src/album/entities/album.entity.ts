import { Agendamento } from '../../agendamento/entities/agendamento.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
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

  @OneToOne(() => Agendamento)
  //Aqui crio uma coluna 'agendamentoId' na nossa tabela 'albuns'.
  @JoinColumn()
  agendamento: Agendamento;
}
