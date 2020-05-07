import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Books } from '../books';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Object;
  id: String;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBook(this.id);
  }

  getBook(title:String){
    this.id = this.route.snapshot.paramMap.get('id');

    this.api.getBook(this.id).subscribe(response => {
      this.books = response;
    }); 
  }

}
