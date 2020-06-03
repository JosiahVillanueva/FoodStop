import { Module } from '@nestjs/common';
import { StoreModule } from './store/app.storeModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TagModule } from './tag/app.tagModule';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StoreModule,
    TagModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
