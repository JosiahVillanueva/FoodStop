import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-books',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  books: Object;
  id: String;

  constructor(private apiService: ApiService, private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBook(this.id);
  }

  getBook(title:String){
    this.id = this.activetedRoute.snapshot.paramMap.get('id');

    this.apiService.getBook(this.id).subscribe(response => {
      this.books = response;
    }); 
  }

}
