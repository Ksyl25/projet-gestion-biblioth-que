import { Author } from '../modèles/author.entity';
import { CreateAuthorDto } from '../dto/create-author.dto';

export class AuthorPresenter {
  static toDto(author: Author): CreateAuthorDto {
    return {
      author_name: author.author_name,
      photo_url: author.photo_url,
      biography: author.biography,
    };
  }

  static toEntity(createAuthorDto: CreateAuthorDto): Author {
    const author = new Author();
    author.author_name = createAuthorDto.author_name;
    author.photo_url = createAuthorDto.photo_url;
    author.biography = createAuthorDto.biography;
    return author;
  }
}