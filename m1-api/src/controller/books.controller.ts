import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BooksService } from '../service/books.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookPresenter } from '../presenter/book.presenter';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<CreateBookDto[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CreateBookDto> {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<CreateBookDto> {
    return this.booksService.create(createBookDto).then(book => 
      BookPresenter.toDto(book)
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}