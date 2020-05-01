import { Injectable, Logger } from '@nestjs/common';
import e = require('express');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './books.entity'

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class BookstoreService {
  constructor(@InjectRepository(BooksEntity) private bookRepository: Repository<BooksEntity>){}

  async getBooks(): Promise<BooksEntity[]>{
    return await this.bookRepository.find();
  }

  async getBook(titleOfBook: string): Promise<BooksEntity[]>{
    return await this.bookRepository.find({
      select: ["id", "title", "description", "author"],
      where: [{ "title": titleOfBook }]
    });
  }

  async addBook(booksEntity: BooksEntity) {
    this.bookRepository.save(booksEntity)
  }

  async updateBook(id: string, booksEntity: BooksEntity) {
    return await this.bookRepository.update(id, booksEntity)
  }

  async deleteBook(id: string) {
    this.bookRepository.delete(id);
  }
}