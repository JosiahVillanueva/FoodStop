import { Module } from '@nestjs/common';
import { BookstoreModule } from './books/app.bookstoreModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TagModule } from './tag/app.tagModule';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookstoreModule,
    TagModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
