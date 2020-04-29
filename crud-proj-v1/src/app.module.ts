import { Module } from '@nestjs/common';
import { BookstoreModule } from './books/app.bookstoreModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BookstoreModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
