import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' }) // Define o nome da tabela como 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true }) // Garante que o email seja único no banco
  email: string;

  @Column()
  senha: string;
}