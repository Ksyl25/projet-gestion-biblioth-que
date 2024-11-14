import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { BooksModule } from './modules/books.module';
import { AuthorsModule } from './modules/authors.module';
import { BookReviewsModule } from './modules/book-reviews.module';

@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule, BookReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
