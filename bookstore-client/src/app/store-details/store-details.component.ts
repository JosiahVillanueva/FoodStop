import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-books',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  books: Object;
  id: String;

  constructor(private apiService: ApiService, private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBook();
  }

  async getBook(){
    this.id = this.activetedRoute.snapshot.paramMap.get('id');

    (await this.apiService.getBook(this.id)).subscribe(response => {
      this.books = response;
    }); 
  }
}
