import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './store-delete.component.html',
  styleUrls: ['./store-delete.component.css']
})
export class StoreDeleteComponent implements OnInit {
  id: String;

  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.id = this.activeRoute.snapshot.paramMap.get('id');

    (await this.apiService.deleteBook(this.id)).subscribe();
  }

}
