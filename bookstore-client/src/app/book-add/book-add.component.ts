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
    //switch map for race condition
    if (this.fg.valid) {
      (await this.apiService.addBook(this.book)).subscribe(response => {});
    
    // of(this.api.addBook(this.book).subscribe(response => {})).pipe(delay(5000));
      this.router.navigate(['dashboard']);
    } else {
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();
    }
  }
}