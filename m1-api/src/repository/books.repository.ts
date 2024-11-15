import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Book } from '../modèles/book.entity';

@Injectable()
export class BooksRepository extends Repository<Book> {
  constructor(private dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }

  // Ajoutez ici des méthodes personnalisées si nécessaire
}