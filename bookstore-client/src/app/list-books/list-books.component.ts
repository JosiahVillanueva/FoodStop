import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
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
