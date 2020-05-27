import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tag-dashboard',
  templateUrl: './tag-dashboard.component.html',
  styleUrls: ['./tag-dashboard.component.css']
})
export class TagDashboardComponent implements OnInit {
  tags: Object;
  searchTag: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTags();
  }

  async getTags() {
    (await this.apiService.getTags()).subscribe(response => {
      this.tags = response;
    }); 
  }

  async getTag() {
    (await this.apiService.getTag(this.searchTag)).subscribe(response => {
      this.tags = response;
    }); 
  }

}
