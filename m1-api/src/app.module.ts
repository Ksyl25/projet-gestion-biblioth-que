/*import { Module } from '@nestjs/common';
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
export class AppModule {}*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookReview } from './modèles/book-review.entity'; // Remplace par le bon chemin
import { Author } from './modèles/author.entity'; // Remplace par le bon chemin
import { Book } from './modèles/book.entity';     // Remplace par le bon chemin
//import { BookReview } from '../src/modèles/book-review.entity'; // Remplace par le bon chemin
import { Connection } from 'typeorm';  // Assurez-vous que 'Connection' est bien importé depuis 'typeorm'
import { OnModuleInit } from '@nestjs/common'; // Assurez-vous que 'OnModuleInit' est bien importé depuis '@nestjs/common'
import { AuthorsModule } from './modules/authors.module';
import { BooksModule } from './modules/books.module';
import { BookReviewsModule } from './modules/book-reviews.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../database/database_bibli.sqlite', // Remplace par le chemin réel de ta base SQLite
      entities: [Author, Book, BookReview], // Liste des entités que tu utilises
      synchronize: true, // Active la synchronisation des entités avec la base de données
    }),
    TypeOrmModule.forFeature([Author, Book, BookReview]), // Ajoute tes modules ici
    AuthorsModule, BooksModule, BookReviewsModule,
  ],
  exports: [TypeOrmModule], // Exporte TypeOrmModule pour l'utiliser dans d'autres modules
})

export class AppModule implements OnModuleInit {
  constructor(private readonly connection: Connection) { }

  async onModuleInit() {
    try {
      // Teste la connexion avec une requête simple
      const isConnected = await this.connection.query('SELECT 1');
      if (isConnected) {
        console.log('Connexion à la base de données SQLite réussie!');
      } else {
        console.error('Échec de la connexion à la base de données');
      }
    } catch (error) {
      // En cas d'erreur de connexion, on l'affiche dans les logs
      console.error('Erreur de connexion à la base de données:', error);
    }
  }
}

