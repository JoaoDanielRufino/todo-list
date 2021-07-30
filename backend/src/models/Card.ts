import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Card')
class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  titulo: string;

  @Column({ nullable: false })
  conteudo: string;

  @Column({ nullable: false })
  lista: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Card;
