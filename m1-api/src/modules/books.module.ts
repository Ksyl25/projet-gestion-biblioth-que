import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from '../service/books.service';
import { BooksController } from '../controller/books.controller';
import { BooksRepository } from '../repository/books.repository';
import { Book } from '../modèles/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService, BooksRepository],
  controllers: [BooksController],
})
export class BooksModule {}