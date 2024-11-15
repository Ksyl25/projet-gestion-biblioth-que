import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AuthorsService } from '../service/authors.service';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorPresenter } from '../presenter/author.presenter';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) { }

  @Get()
  findAll(): Promise<CreateAuthorDto[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CreateAuthorDto> {
    return this.authorsService.findOne(id);
  }

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<CreateAuthorDto> {
    console.log('Requête POST reçue avec le corps:', createAuthorDto);
    return this.authorsService.create(createAuthorDto).then(author =>
      AuthorPresenter.toDto(author)
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.authorsService.remove(id);
  }
}