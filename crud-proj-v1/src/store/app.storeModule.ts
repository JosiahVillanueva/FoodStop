import { Module } from '@nestjs/common';
import { StoreController } from './app.storeController';
import { StoreService } from './app.storeService';
import { StoreEntity } from './store.entity'
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreTagEntity } from './storeTag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreEntity, StoreTagEntity])],
  controllers: [StoreController],
  providers: [StoreService],
})

export class StoreModule {}