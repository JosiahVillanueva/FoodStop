import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from "@angular/router";
import * as L from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-list-books',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  books: Object;
  storeTags: Object;
  id: String;
  map: L.map;

  constructor(private apiService: ApiService, private activetedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBook();
    this.generateMap();
  }

  async getBook(){
    this.id = this.activetedRoute.snapshot.paramMap.get('id');

    (await this.apiService.getBook(this.id)).subscribe(response => {
      this.books = response; 
    });

    (await this.apiService.getStoreTag(this.id)).subscribe(response => {
      this.storeTags = response;
    }); 
  }

  async generateMap(){
    this.map = L.map('map').setView([14.341495, 121.0684108], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);
  }
}
