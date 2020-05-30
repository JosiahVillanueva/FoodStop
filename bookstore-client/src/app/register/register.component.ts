import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  async register(){
    (await this.apiService.register(this.user)).subscribe(res => {});
  }
}

