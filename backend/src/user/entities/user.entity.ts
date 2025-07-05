import { Album } from '../../album/entities/album.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity({ name: 'users' }) //Define o nome da tabela como 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true }) //Garante que o email seja único no banco
  email: string;

  @Column()
  senha: string;

  @Column({ nullable: true }) //nullable: true torna o campo opcional
  telefone: string;

  @Column({ type: 'date', nullable: true }) //nullable: true torna o campo opcional
  datanascimento: Date;
  
  @OneToMany(() => Album, (album) => album.user)
  albuns: Album[];
}