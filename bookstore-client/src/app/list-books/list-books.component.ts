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
  title: String;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log("asd " + this.title)

    this.getBook(this.title);
  }

  getBook(title:String){  
    this.title = this.route.snapshot.paramMap.get('title');

    this.api.getBook(this.title).subscribe(response => {     
      this.books = response;
    }); 
  }

}
