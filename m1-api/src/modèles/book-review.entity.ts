import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class BookReview {
  @PrimaryGeneratedColumn()
  book_review_id: number;

  @Column()
  review_text: string;

  @Column()
  rating: number;

  @Column()
  review_date: string;

  @ManyToOne(() => Book, book => book.reviews)
  book: Book;
}