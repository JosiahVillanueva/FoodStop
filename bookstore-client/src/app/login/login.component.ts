import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  login(){
    // this.api.addBook(this.book).subscribe(response => {});   
  }
}
