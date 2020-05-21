import { Injectable } from '@angular/core';

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
