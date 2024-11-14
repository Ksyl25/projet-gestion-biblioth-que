import { BookReview } from '../modèles/book-review.entity';
import { CreateBookReviewDto } from '../dto/create-book-review.dto';

export class BookReviewPresenter {
  static toDto(bookReview: BookReview): CreateBookReviewDto {
    return {
      review_text: bookReview.review_text,
      rating: bookReview.rating,
      review_date: bookReview.review_date,
      book_id: bookReview.book.book_id,
    };
  }

  static toEntity(createBookReviewDto: CreateBookReviewDto): BookReview {
    const bookReview = new BookReview();
    bookReview.review_text = createBookReviewDto.review_text;
    bookReview.rating = createBookReviewDto.rating;
    bookReview.review_date = createBookReviewDto.review_date;
    return bookReview;
  }
}