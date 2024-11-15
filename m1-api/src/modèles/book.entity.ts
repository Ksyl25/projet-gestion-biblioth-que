import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Author } from './author.entity';
import { BookReview } from './book-review.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column()
  book_name: string;

  @Column()
  book_wrote_date: string;

  @Column()
  book_title: string;

  @Column('real')
  book_price: number;

  @Column()
  book_published_date: string;

  @ManyToOne(() => Author, author => author.books)
  author: Author;

  @OneToMany(() => BookReview, bookReview => bookReview.book)
  reviews: BookReview[];
}