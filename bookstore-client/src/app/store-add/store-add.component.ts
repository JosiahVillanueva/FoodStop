import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})

export class StoreAddComponent implements OnInit {
  book: any = {};
  tags: Object;
  choseTags: any = {};

  storeOpenningHours = [];
  storeOpenningHoursType: any = {};

  location: any = {};

  storeDays = [0,1,2,3,4,5,6];
  days: any = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  fg: FormGroup;

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getTags();

    this.fg = new FormGroup({
      'pictures': new FormControl(this.book.pictures,),
      'title': new FormControl(this.book.title),
      'description': new FormControl(),
      'rating': new FormControl(this.book.rating, [Validators.min(0), Validators.max(5)]),
      'choseTags': new FormControl(this.choseTags),
      'bestSeller': new FormControl(this.book.bestSeller),
      'day': new FormControl(this.days.day, ),
      'openingHours': new FormControl(this.days.openingHours, ),
      'closingHours': new FormControl(this.days.closingHours, ),
      'address': new FormControl(this.location.address, ),
      'city': new FormControl(this.location.city, ),
      'zipCode': new FormControl(this.location.zipCode, ),
      'price': new FormControl(this.book.price, [Validators.min(0)]),
      'contactInformation': new FormControl(this.book.contactInformation, [Validators.pattern("^((\\+639-?)|0)?[0-9]{9}$")]),
      'trending': new FormControl(this.book.trending, ),
    });
  }

  get title() { return this.fg.get('title'); }
  get description() { return this.fg.get('description'); }
  get pictures() { return this.fg.get('pictures'); }
  get rating() { return this.fg.get('rating'); }
  get tag() { return this.fg.get('choseTags'); }
  get bestSeller() { return this.fg.get('bestSeller'); }
  get day() { return this.fg.get('day'); }
  get openingHours() { return this.fg.get('openingHours'); }
  get address() { return this.fg.get('address'); }
  get city() { return this.fg.get('city'); }
  get zipCode() { return this.fg.get('zipCode'); }
  get price() { return this.fg.get('price'); }
  get contactInformation() { return this.fg.get('contactInformation');}
  get trending() { return this.fg.get('trending');}

  async submitBook() {
    if (this.fg.valid) {
      (await this.apiService.addStoreLocation(this.location)).subscribe();

      (await this.apiService.addBook(this.book)).subscribe();

      this.storeOpenningHours = this.days.filter((a: { open: any; close: any; }) => a.open!=undefined && a.close!=undefined);
      (await this.apiService.addOpenningHours(this.storeOpenningHours)).subscribe();

      (await this.apiService.addStoreTag(this.choseTags)).subscribe();

      this.router.navigate(['dashboard']);
    } else {
      this.title.markAsTouched();
    }
  }

  async getTags() {
    (await this.apiService.getTags()).subscribe(response => {
      this.tags = response;
    }); 
  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }
}