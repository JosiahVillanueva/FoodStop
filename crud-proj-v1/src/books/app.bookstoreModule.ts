import { Module } from '@nestjs/common';
import { BookstoreController } from './app.bookstoreController';
import { BookstoreService } from './app.bookstoreService';
import { BooksEntity } from './books.entity'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  controllers: [BookstoreController],
  providers: [BookstoreService],
})

export class BookstoreModule {}