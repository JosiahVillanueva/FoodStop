import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  book: any = {};
  fg: FormGroup;

  constructor(private api: ApiService, private route: Router) {}

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

  submitBook(){
    //switch map for race condition
    if (this.fg.valid) {

      // this.api.addBook(this.book).subscribe(response => {})
    
    of(this.api.addBook(this.book).subscribe(response => {})).pipe(delay(5000));
    console.log("b")

    this.route.navigate([''])
    } else {
      console.log("invalid")
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();
    }
  }

  simulateHttp(val: any, d:number) {
    return of('dummy').pipe(delay(5000));
  }

}