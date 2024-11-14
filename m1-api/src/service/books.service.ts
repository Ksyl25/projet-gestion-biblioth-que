import { Injectable } from '@nestjs/common';
import { BooksRepository } from '../repository/books.repository';
import { Book } from '../modèles/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookPresenter } from '../presenter/book.presenter';

@Injectable()
export class BooksService {
  constructor(
    private booksRepository: BooksRepository,
  ) {}

  findAll(): Promise<CreateBookDto[]> {
    return this.booksRepository.find({ relations: ['author', 'reviews'] }).then(books => 
      books.map(book => BookPresenter.toDto(book))
    );
  }

  async findOne(id: number): Promise<CreateBookDto> {
    const book = await this.booksRepository.findOne({
      where: { book_id: id },
      relations: ['author', 'reviews'],
    });
    return BookPresenter.toDto(book);
  }

  create(createBookDto: CreateBookDto): Promise<Book> {
    const book = BookPresenter.toEntity(createBookDto);
    return this.booksRepository.save(book);
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}