import { Module } from '@nestjs/common';
import { BookstoreController } from './app.bookstoreController';
import { BookstoreService } from './app.bookstoreService';

@Module({
  imports: [],
  controllers: [BookstoreController],
  providers: [BookstoreService],
})

export class BookstoreModule {}
