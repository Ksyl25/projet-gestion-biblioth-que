import { Book } from '../modèles/book.entity';
import { CreateBookDto } from '../dto/create-book.dto';

export class BookPresenter {
  static toDto(book: Book): CreateBookDto {
    return {
      book_name: book.book_name,
      book_wrote_date: book.book_wrote_date,
      book_title: book.book_title,
      book_price: book.book_price,
      book_published_date: book.book_published_date,
      //book_author_id: book.author.author_id,
    };
  }

  static toEntity(createBookDto: CreateBookDto): Book {
    const book = new Book();
    book.book_name = createBookDto.book_name;
    book.book_wrote_date = createBookDto.book_wrote_date;
    book.book_title = createBookDto.book_title;
    book.book_price = createBookDto.book_price;
    book.book_published_date = createBookDto.book_published_date;
    return book;
  }
}