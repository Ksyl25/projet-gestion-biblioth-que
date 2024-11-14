import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReviewsService } from '../service/book-reviews.service';
import { BookReviewsController } from '../controller/book-reviews.controller';
import { BookReviewsRepository } from '../repository/book-reviews.repository';
import { BookReview } from '../modèles/book-review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookReview])],
  providers: [BookReviewsService, BookReviewsRepository],
  controllers: [BookReviewsController],
})
export class BookReviewsModule {}