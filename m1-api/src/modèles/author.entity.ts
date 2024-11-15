import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  author_id: number;

  @Column()
  author_name: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ nullable: true })
  biography: string;

  @OneToMany(() => Book, book => book.author)
  books: Book[];
}