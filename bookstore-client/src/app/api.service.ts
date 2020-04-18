import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Books } from './books';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
};
// const apiUrl = '/api/bookstore/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {  
  constructor(private http: HttpClient) { }

  public getBooks(){
    const url = 'http://localhost:3000/api/books/get/allBooks';

    return this.http.get(url);
  }

  public getBook(title: String){  
    const url = 'http://localhost:3000/api/books/get/book/' + title;

    return this.http.get(url);
  }

  public addBook(book: Books[]) {
    // Note: Yung responseType: Nag patangal sya ng console error
    // pag tinangal ko yung .pipe nag kakaroon ng problema sa ID nagiging 

    const url = 'http://localhost:3000/api/books/post/book';

    return this.http.post(url, book, {responseType: 'text'})
    .pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }

  public updateBook(id: String, book: Books[]) {
    const url = 'http://localhost:3000/api/books/put/book/' + id;

    return this.http.put(url, book);
  }

  public deleteBook(title: String){
    const url = 'http://localhost:3000/api/books/delete/book/' + title;

    return this.http.delete(url);
  }

}
