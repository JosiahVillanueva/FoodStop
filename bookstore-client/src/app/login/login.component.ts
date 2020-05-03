import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  user: any = {};
  fg: FormGroup;

  constructor(
    private api: ApiService, 
    private route: Router, 
    private userService: UserService
    ) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      'username': new FormControl(this.user.username, [Validators.required]),
      'password': new FormControl(this.user.password, Validators.required)
    });
  }

  get username() { return this.fg.get('username'); }
  get password() { return this.fg.get('password'); }

  login(): boolean {
    if (this.fg.valid) {
      this.userService.setLogin(true)
      this.api.login(this.user).subscribe();
      this.route.navigate(['dashboard'])

      return true;
    }else{
      this.fg.get('username').markAsTouched();
      this.fg.get('password').markAsTouched();

      return false;
    }
  }
}
