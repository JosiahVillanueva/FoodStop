import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Redirect, Res } from '@nestjs/common';
import { StoreService } from './app.storeService';
import { StoreEntity } from './store.entity'

@Controller('stores')
export class StoreController{
  constructor(private readonly appService: StoreService) {}

  @Get('get/allStores')
  async getStores(): Promise<any[]> {
    return await this.appService.getStores();
  }

  @Get('get/store/:id')
  getStore(@Param('id') id: string) {
    return this.appService.getStore(id);
  }

  @Post('post/store')
  async addStore(@Body() bDto: StoreEntity): Promise<StoreEntity> {
    return await this.appService.addStore(bDto);
  }

  @Put('put/store/:id')
  updateStore(@Param('id') id: number, @Body() bDto: StoreEntity) {
    return this.appService.updateStore(id, bDto)
  }

  @Delete('delete/store/:id')
  deleteStore(@Param('id') id: number) {
    return this.appService.deleteStore(id)
  }
}
