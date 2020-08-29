import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './books';
import { Tag } from './tag';
import { StoreTag } from './storeTag';
import { User } from './user';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StoreOpenningHours } from './storeOpenningHours';
import { StoreLocation } from './storeLocation';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  async login(user: User[]) {
    const url = "http://localhost:3000/api/auth/login";
    
    return this.http.post(url, user, {observe : 'response'});
  }

  async register(user: User[]) {
    const url = 'http://localhost:3000/api/books/post/user';

    return this.http.post(url, user);
  }

  async getBooks() {
    const url = 'http://localhost:3000/api/stores/get/allStores';

    return this.http.get(url);
  }

  async getBook(title: String) {
    const url = 'http://localhost:3000/api/stores/get/store/' + title;

    return this.http.get(url);
  }

  async addBook(book: Books[]) {
    const url = 'http://localhost:3000/api/stores/post/store';

    return this.http.post(url, book, {observe : 'response'})
    .pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );
  }

  async updateBook(id: String, book: Books[]) {
    const url = 'http://localhost:3000/api/stores/put/store/' + id;  

    return this.http.put(url, book, {observe : 'response'}).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );;
  }

  async deleteBook(title: String) {
    const url = 'http://localhost:3000/api/stores/delete/store/' + title;

    return this.http.delete(url);
  }

  async getTrendingStore() {
    const url = 'http://localhost:3000/api/stores/get/trending/store';

    return this.http.get(url);
  }

  async getStoreTag(title: String) {
    const url = 'http://localhost:3000/api/stores/get/storeTag/' + title;

    return this.http.get(url);
  }

  async getTags() {
    const url = 'http://localhost:3000/api/tag/get/allTags';

    return this.http.get(url);
  }

  async getTag(id: number) {
    const url = 'http://localhost:3000/api/tag/get/tag/' + id;
  
    return this.http.get(url);
  }

  async addTag(tag: Tag[]) {
    const url = 'http://localhost:3000/api/tag/post/tag';

    return this.http.post(url, tag);
  }

  async updateTag(id: string, tag: Tag[]) {
    const url = 'http://localhost:3000/api/tag/put/tag/' + id;
    
    return this.http.put(url, tag);
  }

  async deleteTag(id: string) {
    const url = 'http://localhost:3000/api/tag/delete/tag/' + id;

    return this.http.delete(url);
  }

  async getDiscoverTag() {
    const url = 'http://localhost:3000/api/tag/get/discover';

    return this.http.get(url);
  }

  async getAvailPriorities(){
    const url = "http://localhost:3000/api/tag/get/availPriorities";

    return this.http.get(url);
  }

  async addOpenningHours(storeOpenningHours: StoreOpenningHours[]) {
    const url = "http://localhost:3000/api/stores/post/storeOpenningHours";

    return this.http.post(url, storeOpenningHours);
  }

  async getOpenningHours(id: String) {
    const url = "http://localhost:3000/api/stores/get/storeOpenningHours/" + id;

    return this.http.get(url);
  }

  async addStoreTag(storetag: StoreTag[]) {
    const url = 'http://localhost:3000/api/stores/post/storeTag';

    return this.http.post(url, storetag);
  }

  async addStoreLocation(storeLocation: StoreLocation) {
    const url =   'http://localhost:3000/api/stores/post/storeLocation';

    return this.http.post(url, storeLocation);
  }
}
