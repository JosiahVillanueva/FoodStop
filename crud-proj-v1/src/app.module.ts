import { Module } from '@nestjs/common';
import { BookstoreModule } from './books/app.bookstoreModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksEntity } from './books/books.entity'


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookstoreModule
  ]
})
export class AppModule {}
