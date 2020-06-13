import { Injectable } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreEntity } from './store.entity'
import { StoreTagEntity } from './storeTag.entity'

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class StoreService {
  constructor(@InjectRepository(StoreEntity) private storeRepository: Repository<StoreEntity>, 
  @InjectRepository(StoreTagEntity) private storeTagRepository: Repository<StoreTagEntity>){}

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
      console.log("FAILED TO ADD store, HAS DUPLICATE");
    } else {
      return await this.storeRepository.save(storeEntity);
    }
  }

  async updateStore(id: number, storeEntity: StoreEntity) {
    return await this.storeRepository.update(id, storeEntity);
  }

  async deleteStore(id: number) {
    return await this.storeRepository.delete(id);
  }

  async getTrendingStore() {
    return await this.storeRepository.find({
      where: [{ "trending": 1 }]
    });
  }

  async addStoreTag(storeTagEntity: StoreTagEntity): Promise<StoreTagEntity> {
    return await this.storeTagRepository.save(storeTagEntity);
  }

  async getStoreTag(id: string): Promise<StoreTagEntity[]> {
    return await this.storeTagRepository.find({
      where: [{ "storeId": id }]
    });
  }

  public async duplicate(value: string): Promise<boolean> {
    const result = await this.storeRepository.find({
      where: [{ "title": value }]
    });

    return result.length >= 1;
  }
}