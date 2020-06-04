import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags: Object;
  stores: Object

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTags();
    this.getTrendingStore();
  }

  async getTags() {
    (await this.apiService.getDiscoverTag()).subscribe(response => {
      this.tags = response;
    }); 
  }
  
  async getTrendingStore() {
    (await this.apiService.getTrendingStore()).subscribe(response => {
      this.stores = response;
    }); 
  }
}
