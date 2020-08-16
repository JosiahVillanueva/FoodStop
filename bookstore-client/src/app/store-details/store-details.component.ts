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
  
    //not working properly, problem was ginagamit demo server
    await L.Routing.control({
      waypoints: [
        L.latLng(14.343056, 121.069200),
        L.latLng([14.388817, 121.045406])
      ],
      routeWhileDragging: true
    }).addTo(this.map);
  }
}
