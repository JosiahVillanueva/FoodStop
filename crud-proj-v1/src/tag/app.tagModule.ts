import { Module } from '@nestjs/common';
import { TagController } from './app.tagController';
import { TagService } from './app.tagService';
import { TagEntity } from './tag.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})

export class TagModule {}