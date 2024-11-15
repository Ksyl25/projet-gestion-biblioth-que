import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Author } from '../modèles/author.entity';

@Injectable()
export class AuthorsRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  // Ajoutez ici des méthodes personnalisées si nécessaire
}