import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
  book: any = {};
  storeTag: any = {};
  tags: Object;
  choseTags: any = {};
  fg: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getTags();

    this.fg = new FormGroup({
      'pictures': new FormControl(this.book.pictures, Validators.required),
      'title': new FormControl(this.book.title, [Validators.required,]),
      'description': new FormControl(),
      'rating': new FormControl(this.book.rating, [Validators.min(0), Validators.max(5)]),
      'choseTags': new FormControl(this.choseTags),
      'bestSeller': new FormControl(this.book.bestSeller),
      'openingHours': new FormControl(this.book.openingHours, ),
      'location': new FormControl(this.book.location, ),
      'price': new FormControl(this.book.price, ),
      'contactInformation': new FormControl(this.book.contactInformation, ),
      'trending': new FormControl(this.book.trending, ),
    });
  } 

  get title() { return this.fg.get('title'); }
  get description() { return this.fg.get('description'); }
  get pictures() { return this.fg.get('pictures'); }
  get rating() { return this.fg.get('rating'); }
  get tag() { return this.fg.get('choseTags'); }
  get bestSeller() { return this.fg.get('bestSeller'); }
  get openingHours() { return this.fg.get('openingHours'); }
  get location() { return this.fg.get('location'); }
  get price() { return this.fg.get('price'); }
  get contactInformation() { return this.fg.get('contactInformation');}
  get trending() { return this.fg.get('trending');}

  async submitBook() {
    if (this.fg.valid) {
      (await this.apiService.addBook(this.book)).subscribe( res => {
        this.choseTags.forEach(element => {
          this.storeTag.storeId = res.body.id;
          this.storeTag.tag = element;

          this.apiService.addStoreTag(this.storeTag).subscribe();
        });
        
        this.router.navigate(['dashboard']);
      },
      err=>{
        console.log("On Add Status Code Error"+err.status);
      });
    } else {
      this.fg.get('title').markAsTouched();
    }
  }

  async getTags() {
    (await this.apiService.getTags()).subscribe(response => {
      this.tags = response;
    }); 
  }
}