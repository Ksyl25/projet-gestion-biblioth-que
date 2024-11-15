import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BookReview } from '../modèles/book-review.entity';

@Injectable()
export class BookReviewsRepository extends Repository<BookReview> {
  constructor(private dataSource: DataSource) {
    super(BookReview, dataSource.createEntityManager());
  }

  // Ajoutez ici des méthodes personnalisées si nécessaire
}