import { Injectable } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity'
import {MoreThanOrEqual} from "typeorm";

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
    this.getAvailablePriority()

    return await this.tagRepository.find({
      where: [{ show: MoreThanOrEqual(1) }], 
      order: {
        show: "ASC"
      }
    });
  }

  async getAvailablePriority() {
    var priorities = [1, 2, 3, 4, 5, 6];
    var show = [];

    const result = await this.tagRepository.find({
      where: { show: MoreThanOrEqual(1) }, 
    });

    result.forEach(element => show.push(element.show))
    show = priorities.filter(x => !show.includes(x));

    return show;
  }

  public async duplicate(value: string): Promise<boolean>{
    const result = await this.tagRepository.find({
      where: [{ "tagName": value }, { "tagHexColor": value }]
    });

    return result.length >= 1;
  }
}