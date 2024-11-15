import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from '../service/authors.service';
import { AuthorsController } from '../controller/authors.controller';
import { AuthorsRepository } from '../repository/authors.repository';
import { Author } from '../modèles/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsService, AuthorsRepository],
  controllers: [AuthorsController],
})
export class AuthorsModule {}