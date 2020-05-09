import { Injectable, Logger } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection, Entity } from 'typeorm';
import { BooksEntity } from './books.entity'

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class BookstoreService {
  constructor(@InjectRepository(BooksEntity) private bookRepository: Repository<BooksEntity>){}

  async getBooks(): Promise<BooksEntity[]>{
    return await this.bookRepository.find();
  }

  async getBook(id: string): Promise<BooksEntity[]>{
    return await this.bookRepository.find({
      where: [{ "title": id }]
    });
  }

  async addBook(booksEntity: BooksEntity) {
    let book = await this.checkDuplicate(booksEntity.title);
    
    if(book === true){
      console.log("FAILED TO ADD BOOK, HAS DUPLICATE")
    } else {
      this.bookRepository.save(booksEntity)
    }
  }

  async updateBook(id: number, booksEntity: BooksEntity) {
    return await this.bookRepository.update(id, booksEntity)
  }

  async deleteBook(id: number) {
    this.bookRepository.delete(id);
  }

  public async checkDuplicate(value: string): Promise<boolean> {
    const result = await getConnection()
        .getRepository(BooksEntity)
        .createQueryBuilder('bookstore')
        .where('bookstore.title= :title', { title: value})
        .getMany();

    return result.length >= 1;
  }
}