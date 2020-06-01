import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, Entity } from 'typeorm';
import { TagEntity } from './tag.entity'

@Injectable()
export class TagService {
  constructor(@InjectRepository(TagEntity) private tagRepository: Repository<TagEntity>){}

  async getTags(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async getTag(id: string): Promise<TagEntity[]> {
    return await this.tagRepository.find({
      where: [{ "id": id }, {"tagName" : id}]
    });
  }

  async addTag(tagEntity: TagEntity): Promise<TagEntity> {
    let tag = await this.duplicate(tagEntity.tagName)

    if(tag === true){
      console.log("FAILED TO ADD BOOK, HAS DUPLICATE")
    } else {
      console.log("added")
      return await this.tagRepository.save(tagEntity)
    }
  }

  async updateTag(id: number, tagEntity: TagEntity) {
    return await this.tagRepository.update(id, tagEntity)
  }

  async deleteTag(id: number) {
    return this.tagRepository.delete(id);
  }

  async getDiscoverTag(): Promise<TagEntity[]> {
    return await this.tagRepository.find({
      where: [{ "show": 1 }]
    });
  }

  public async duplicate(value: string): Promise<boolean>{
    const result = await this.tagRepository.find({
      where: [{ "tagName": value }, { "tagHexColor": value }]
    });
    
    return result.length >= 1;
  }
}