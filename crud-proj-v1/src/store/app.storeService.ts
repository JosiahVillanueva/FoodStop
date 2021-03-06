import { Injectable } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreEntity } from './store.entity'
import { StoreTagEntity } from './storeTag.entity'
import { StoreOpenningHoursEntity } from './storeOpenningHours.entity';
import { StoreLocationEntity } from './storeLocation.entity';

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class StoreService {
  a: StoreEntity;
  b: StoreLocationEntity;

  constructor(
    @InjectRepository(StoreEntity) private storeRepository: Repository<StoreEntity>, 
    @InjectRepository(StoreTagEntity) private storeTagRepository: Repository<StoreTagEntity>,
    @InjectRepository(StoreOpenningHoursEntity) private storeOpenningHoursRepository: Repository<StoreOpenningHoursEntity>,
    @InjectRepository(StoreLocationEntity) private storeLocationRepository: Repository<StoreLocationEntity>,
  ){}

  async getStores(): Promise<StoreEntity[]> {
    return await this.storeRepository.find();
  }

  async getStore(id: string): Promise<StoreEntity[]> {
    return await this.storeRepository.find({
      where: [{ "title": id }, {"id" : id}]
    });
  }

  async addStore(storeEntity: StoreEntity): Promise<StoreEntity> {
    // let store = await this.duplicate(storeEntity.title)

    // if(store === true){
    //   console.log("FAILED TO ADD store, HAS DUPLICATE");
    // } else {

      this.a = storeEntity;
      storeEntity.location = this.b;

      return await this.storeRepository.save(storeEntity);
    // }
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
    var storeTag:any = [];

    if(storeTagEntity.tag === undefined || storeTagEntity.tag === null){
      //some code here??
    }else {
      for(var a=0; a < storeTagEntity.tag.length; a++) {
        var data = {
          "tag": storeTagEntity.tag[a],
          "storeEntity": this.a
        }
        storeTag.push(data);
      }
  }
    return await this.storeTagRepository.save(storeTag);
  }

  async getStoreTag(id: string): Promise<StoreTagEntity[]> {
    return await this.storeTagRepository.find({
      where: [{ "storeEntity": id }]
    });
  }

  async addStoreOpenningHours(storeOpenningHours: StoreOpenningHoursEntity): Promise<StoreOpenningHoursEntity> {
    for(var a=0; a < Object.keys(storeOpenningHours).length; a+=1) {
      storeOpenningHours[a].storeEntity = this.a;
    }
    
    return await this.storeOpenningHoursRepository.save(storeOpenningHours);
  }

  async getStoreOpenningHours(id: string): Promise<StoreOpenningHoursEntity[]> {
    return await this.storeOpenningHoursRepository.find({
      where: [{"storeEntity": id}]
    });
  }

  async addStoreLocation(storeLocation: StoreLocationEntity): Promise<StoreLocationEntity> {
    this.b = storeLocation;

    return await this.storeLocationRepository.save(storeLocation);
  }

  public async duplicate(value: string): Promise<boolean> {
    const result = await this.storeRepository.find({
      where: [{ "title": value }]
    }); 

    return result.length >= 1;
  }
}