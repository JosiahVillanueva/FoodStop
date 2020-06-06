import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, Entity } from 'typeorm';
import { StoreEntity } from './store.entity'

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class StoreService {
  constructor(@InjectRepository(StoreEntity) private storeRepository: Repository<StoreEntity>){}

  async getStores(): Promise<StoreEntity[]> {
    return await this.storeRepository.find();
  }

  async getStore(id: string): Promise<StoreEntity[]> {
    return await this.storeRepository.find({
      where: [{ "title": id }, {"id" : id}]
    });
  }

  async addStore(storeEntity: StoreEntity): Promise<StoreEntity> {
    let store = await this.duplicate(storeEntity.title)

    if(store === true){
      console.log("FAILED TO ADD store, HAS DUPLICATE")
    } else {
      console.log("added")
      return await this.storeRepository.save(storeEntity)
    }
  }

  async updateStore(id: number, storeEntity: StoreEntity) {
    return await this.storeRepository.update(id, storeEntity)
  }

  async deleteStore(id: number) {
    return await this.storeRepository.delete(id);
  }

  async getTrendingStore() {
    return await this.storeRepository.find({
      where: [{ "trending": 1 }]
    });
  }

  public async duplicate(value: string): Promise<boolean>{
    const result = await this.storeRepository.find({
      where: [{ "title": value }]
    });

    // console.log("duplicate 1" + result)
    // console.log("duplicate 2" + result.length)
    // console.log("duplicate 2" + result.length >= 1)

    // console.log(result.length >= 1)
    return result.length >= 1;
  }
}