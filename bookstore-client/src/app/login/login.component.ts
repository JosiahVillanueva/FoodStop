import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any = {};
  fg: FormGroup;
  showErrorMessage:boolean = false;
  
  constructor(private apiService: ApiService, private userService: UserService, private _router: Router) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      'username': new FormControl(this.user.username, [Validators.required]),
      'password': new FormControl(this.user.password, Validators.required)
    });

    this.userService.setLogin(false)
  }

  get username() { return this.fg.get('username'); }
  get password() { return this.fg.get('password'); }

  async login() {
    
    if (this.fg.valid) {
      (await this.apiService.login(this.user)).subscribe(res => { 
        this.userService.setLogin(true);
        this._router.navigate(['dashboard']);
      },
      err=>{
        this.showErrorMessage = true;
      });

      // console.log("a " + this.apiService.login(this.user).subscribe())
      // console.log(Object.values(this.apiService.login(this.user).subscribe()))
      
      /*
       Icheck ko dito kung may access token na ako then dun ako mag decide kung true of false, right now
       ako yung nag seset kung true ba or false yung access token eh tapos if true redirect ka sa dashboard
       */
      // this.userService.setLogin(true);
      // this._router.navigate(['dashboard']);
    } else {
      this.fg.get('username').markAsTouched();
      this.fg.get('password').markAsTouched();
    }
  }
}
