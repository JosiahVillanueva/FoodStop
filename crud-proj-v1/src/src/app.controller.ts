import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
  
  @ApiProperty()
  id: number;

  @ApiProperty({required: true})
  title: string;
  
  @ApiProperty({required: true})
  description: string;

  @ApiProperty({required: true})
  author: string;
}

@Controller('books')

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/allBooks')
  getBooks() {
    return this.appService.getBooks();
  }

  @Get('get/book/:title')
  getBook(@Param('title') title: string) {
    return this.appService.getBook(title);
  }

  @Post('post/book')
  addBook(@Body() bDto: BookDto){
    return this.appService.addBook(bDto);
  }

  @Put('put/book/:id')
  updateBook(@Param('id') id: string, @Body() bDto: BookDto){
    
      return this.appService.updateBook(id, bDto)
  }

  @Delete('delete/book/:id')
  deleteBook(@Param('id') id: string){
    return this.appService.deleteBook(id)
  }
}
