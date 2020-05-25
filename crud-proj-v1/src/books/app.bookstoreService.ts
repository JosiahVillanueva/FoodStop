import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, Entity } from 'typeorm';
import { BooksEntity } from './books.entity'

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class BookstoreService {
  constructor(@InjectRepository(BooksEntity) private bookRepository: Repository<BooksEntity>){}

  async getBooks(): Promise<BooksEntity[]> {
    console.log("getbook")
    console.log("----------")
    
    return await this.bookRepository.find();
  }

  async getBook(id: string): Promise<BooksEntity[]> {
    return await this.bookRepository.find({
      where: [{ "title": id }, {"id" : id}]
    });
  }

  async addBook(booksEntity: BooksEntity): Promise<BooksEntity> {
    let book = await this.duplicate(booksEntity.title)

    if(book === true){
      console.log("FAILED TO ADD BOOK, HAS DUPLICATE")
    } else {
      console.log("added")
      return await this.bookRepository.save(booksEntity)
    }
  }

  async updateBook(id: number, booksEntity: BooksEntity) {
    return await this.bookRepository.update(id, booksEntity)
  }

  async deleteBook(id: number) {
    return this.bookRepository.delete(id);
  }

  public async duplicate(value: string): Promise<boolean>{
    const result = await this.bookRepository.find({
      where: [{ "title": value }]
    });

    // console.log("duplicate 1" + result)
    // console.log("duplicate 2" + result.length)
    // console.log("duplicate 2" + result.length >= 1)

    // console.log(result.length >= 1)
    return result.length >= 1;
  }
}