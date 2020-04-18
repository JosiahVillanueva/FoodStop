import { Module } from '@nestjs/common';
import { BookstoreModule } from './app.bookstoreModule';

@Module({
  imports: [BookstoreModule]
})
export class AppModule {}
