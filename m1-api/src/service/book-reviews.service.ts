import { Injectable } from '@nestjs/common';
import { BookReviewsRepository } from '../repository/book-reviews.repository';
import { BookReview } from '../modèles/book-review.entity';
import { CreateBookReviewDto } from '../dto/create-book-review.dto';
import { BookReviewPresenter } from '../presenter/book-review.presenter';

@Injectable()
export class BookReviewsService {
  constructor(
    private bookReviewsRepository: BookReviewsRepository,
  ) {}

  findAll(): Promise<CreateBookReviewDto[]> {
    return this.bookReviewsRepository.find({ relations: ['book'] }).then(bookReviews => 
      bookReviews.map(bookReview => BookReviewPresenter.toDto(bookReview))
    );
  }

  async findOne(id: number): Promise<CreateBookReviewDto> {
    const bookReview = await this.bookReviewsRepository.findOne({
      where: { book_review_id: id },
      relations: ['book'],
    });
    return BookReviewPresenter.toDto(bookReview);
  }

  create(createBookReviewDto: CreateBookReviewDto): Promise<BookReview> {
    const bookReview = BookReviewPresenter.toEntity(createBookReviewDto);
    return this.bookReviewsRepository.save(bookReview);
  }

  async remove(id: number): Promise<void> {
    await this.bookReviewsRepository.delete(id);
  }
}