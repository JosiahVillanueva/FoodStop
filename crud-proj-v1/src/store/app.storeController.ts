import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Redirect, Res } from '@nestjs/common';
import { StoreService } from './app.storeService';
import { StoreEntity } from './store.entity'
import { StoreTagEntity } from './storeTag.entity'

@Controller('stores')
export class StoreController{
  constructor(private readonly appService: StoreService) {}

  @Get('get/allStores')
  async getStores(): Promise<any[]> {
    return await this.appService.getStores();
  }

  @Get('get/store/:id')
  async getStore(@Param('id') id: string) {
    return this.appService.getStore(id);
  }

  @Post('post/store')
  async addStore(@Body() bDto: StoreEntity): Promise<StoreEntity> {
    return await this.appService.addStore(bDto);
  }

  @Put('put/store/:id')
  async updateStore(@Param('id') id: number, @Body() bDto: StoreEntity) {
    return this.appService.updateStore(id, bDto)
  }

  @Delete('delete/store/:id')
  async deleteStore(@Param('id') id: number) {
    return this.appService.deleteStore(id)
  }

  @Get('get/trending/store')
  async gretTrendingStore(): Promise<any[]> {
    return await this.appService.getStores();
  }

  @Post('post/storeTag')
  async addStoreTag(@Body() bDto: StoreTagEntity): Promise<StoreTagEntity> {
    return await this.appService.addStoreTag(bDto);
  }
}
