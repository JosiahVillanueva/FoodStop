import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Object;
  title: String;
  
  constructor(private apiService: ApiService, private userService: UserService) {}
  
  ngOnInit(): void {
    this.getAllBook();
  }

  async getAllBook() {
    (await this.apiService.getBooks()).subscribe(response => {
      this.books = response;
    }); 
  }

  getBook() {
    if (!this.title || !this.title.replace(/\s/g, '').length || this.title.length < 0) {
      //redirect to allBook?
    } else {
      this.apiService.getBook(this.title).subscribe(response => {
        this.books = response;
      }); 
    }
  }

  logout() {
    this.userService.setLogin(false);
  }
}
