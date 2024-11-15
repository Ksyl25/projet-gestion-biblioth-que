import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorsRepository } from '../repository/authors.repository';
import { Author } from '../modèles/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';
import { AuthorPresenter } from '../presenter/author.presenter';

@Injectable()
export class AuthorsService {
  constructor(
    private authorsRepository: AuthorsRepository,
  ) { }

  findAll(): Promise<CreateAuthorDto[]> {

    console.log("Fetching all authors");

    return this.authorsRepository.find({ relations: ['books'] }).then(authors =>
      authors.map(author => AuthorPresenter.toDto(author))
    );
  }

  async findOne(id: number): Promise<CreateAuthorDto> {
    const author = await this.authorsRepository.findOne({
      where: { author_id: id },
      relations: ['books'],
    });
    return AuthorPresenter.toDto(author);
  }

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = AuthorPresenter.toEntity(createAuthorDto);
    return this.authorsRepository.save(author);
  }

  async remove(id: number): Promise<void> {
    await this.authorsRepository.delete(id);
  }
}