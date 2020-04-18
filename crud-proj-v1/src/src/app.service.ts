import { Injectable, Logger } from '@nestjs/common';
import { BookDto } from './app.controller';
import { BOOKS } from './mockData/book.mock';
import e = require('express');

// Node JS > Nest JS (Swagger UI)

@Injectable()
export class AppService {
  books = BOOKS;

  getBooks(){
    return this.books;
  }

  getBook(titleOfBook: string){  
    const book = this.books.filter(a => a.title === titleOfBook);

    return book;
  }

  addBook(bDto:BookDto){
    // Not yet satisfied      
    const b = Object.getOwnPropertyDescriptor(this.books[this.books.length -1], 'id')  
    const c = b.value + 1

    bDto.id = c

    this.books.push(bDto);     
    
    return bDto;
  } 

  updateBook(id: string, bDto:BookDto){      
    const getBook = this.books.find(a => a.id === parseInt(id));

    if(getBook === undefined){
      console.log("Undefined Update")
    }else{    
      getBook.title = bDto.title;
      getBook.description = bDto.description;
      getBook.author = bDto.author;   
      
      return getBook;
    }
  }
  
  deleteBook(id: string){    
    const getBook = this.books.find(a => a.id === parseInt(id));

    if(getBook === undefined){
      console.log("Undefined Delete")
    }else{
      return this.books.splice(this.books.indexOf(getBook), 1);
    }
  }
}
