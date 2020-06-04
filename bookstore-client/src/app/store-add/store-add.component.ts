import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
  book: any = {};
  fg: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      'pictures': new FormControl(this.book.pictures, Validators.required),
      'title': new FormControl(this.book.title, [Validators.required,]),
      'description': new FormControl(),
      'rating': new FormControl(this.book.rating, Validators.required),
      'tag': new FormControl(this.book.tag, Validators.required),
      'bestSeller': new FormControl(this.book.bestSeller, Validators.required),
      'openingHours': new FormControl(this.book.openingHours, Validators.required),
      'location': new FormControl(this.book.location, Validators.required),
      'price': new FormControl(this.book.price, Validators.required),
      'contactInformation': new FormControl(this.book.contactInformation, Validators.required),
      'trending': new FormControl(this.book.trending, Validators.required),
    });
  } 

  get title() { return this.fg.get('title'); }
  get description() { return this.fg.get('description'); }
  get pictures() { return this.fg.get('pictures'); }
  get rating() { return this.fg.get('rating'); }
  get tag() { return this.fg.get('tag'); }
  get bestSeller() { return this.fg.get('bestSeller'); }
  get openingHours() { return this.fg.get('openingHours'); }
  get location() { return this.fg.get('location'); }
  get price() { return this.fg.get('price'); }
  get contactInformation() { return this.fg.get('contactInformation');}
  get trending() { return this.fg.get('trending');}

  async submitBook() {
    if (this.fg.valid) {
      (await this.apiService.addBook(this.book)).subscribe(res => { 
        console.log(this.book)
        // did not specify status code since may err naman 
        this.router.navigate(['dashboard']);
      },
      err=>{
        console.log("On Add Status Code Error"+err.status)
      });
    } else {
      console.log("pasok sa else")
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();
    }
  }
}