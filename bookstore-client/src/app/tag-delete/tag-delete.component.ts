import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tag-delete',
  templateUrl: './tag-delete.component.html',
  styleUrls: ['./tag-delete.component.css']
})
export class TagDeleteComponent implements OnInit {
  id: string;

  constructor(private activeRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.deleteTag();
  }

  async deleteTag() {
    this.id = this.activeRoute.snapshot.paramMap.get('id');

    (await this.apiService.deleteTag(this.id)).subscribe();
  }
}
