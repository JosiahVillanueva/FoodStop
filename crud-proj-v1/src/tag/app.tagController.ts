import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, Redirect, Res } from '@nestjs/common';
import { TagService } from './app.tagService';
import { TagEntity } from './tag.entity';

@Controller('tag')
export class TagController{
  constructor(private tagService: TagService) {}

  @Get('get/allTags')
  async getTags(): Promise<any[]> {
    return await this.tagService.getTags();
  }

  @Get('get/tag/:id')
  async getTag(@Param('id') id: string) {
    return await this.tagService.getTag(id);
  }

  @Post('post/tag')
  async addTag(@Body() tagDto: TagEntity): Promise<TagEntity> {
    return await this.tagService.addTag(tagDto);
  }

  @Put('put/tag/:id')
  async updateTag(@Param('id') id: number, @Body() tagDto: TagEntity) {
    return await this.tagService.updateTag(id, tagDto)
  }

  @Delete('delete/tag/:id')
  async deletTag(@Param('id') id: number) {
    return await this.tagService.deleteTag(id)
  }

  @Get('get/discover')
  async getDiscoverTag(): Promise<any[]> {
    return await this.tagService.getDiscoverTag();
  }
}
