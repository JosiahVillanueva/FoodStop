import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTags()
  }

  async getTags() {
    (await this.apiService.getDiscoverTag()).subscribe(response => {
      this.tags = response;
    }); 
  }

}
