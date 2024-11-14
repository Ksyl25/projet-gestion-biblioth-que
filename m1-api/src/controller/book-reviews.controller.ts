import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BookReviewsService } from '../service/book-reviews.service';
import { CreateBookReviewDto } from '../dto/create-book-review.dto';
import { BookReviewPresenter } from '../presenter/book-review.presenter';

@Controller('book-reviews')
export class BookReviewsController {
  constructor(private readonly bookReviewsService: BookReviewsService) {}

  @Get()
  findAll(): Promise<CreateBookReviewDto[]> {
    return this.bookReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CreateBookReviewDto> {
    return this.bookReviewsService.findOne(id);
  }

  @Post()
  create(@Body() createBookReviewDto: CreateBookReviewDto): Promise<CreateBookReviewDto> {
    return this.bookReviewsService.create(createBookReviewDto).then(bookReview => 
      BookReviewPresenter.toDto(bookReview)
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.bookReviewsService.remove(id);
  }
}