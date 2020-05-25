import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: any = {};
  fg: FormGroup;
  
  countries: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      'title': new FormControl(this.book.title, [Validators.required,]),
      'description': new FormControl(),
      'author': new FormControl(this.book.author, Validators.required)
    });
  } 

  get title() { return this.fg.get('title'); }
  get description() { return this.fg.get('description'); }
  get author() { return this.fg.get('author'); }

  async submitBook() {
    if (this.fg.valid) {
      (await this.apiService.addBook(this.book)).subscribe(res => { 
        // did not specify status code since may err naman 
        this.router.navigate(['dashboard']);
      },
      err=>{
        console.log("On Add Status Code Error"+err.status)
      });
    } else {
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();
    }
  }
}