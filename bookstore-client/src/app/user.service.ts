import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  initial: boolean = false;

  setLogin(result: boolean){
    this.initial = result;
  }

  isLoggedIn(): boolean {
    return this.initial;
  }
}
