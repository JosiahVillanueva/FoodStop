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
      where: [{ "id": id }, {"tag_name" : id}]
    });
  }

  async addTag(tagEntity: TagEntity): Promise<TagEntity> {
    let tag = await this.duplicate(tagEntity.tag_name)

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

  public async duplicate(value: string): Promise<boolean>{
    const result = await this.tagRepository.find({
      where: [{ "tag_name": value }, { "tag_hex_color": value }]
    });
    
    return result.length >= 1;
  }
}