import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'agendamentos' }) // Definindo o nome da tabela
export class Agendamento {
  // @PrimaryGeneratedColumn define a coluna como chave primária auto-incrementada
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'time' })
  hora: string;

  @Column()
  local: string;

  @Column()
  cliente: string;
}
