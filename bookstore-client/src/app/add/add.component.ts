import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

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
      'title': new FormControl(this.book.title, [
        Validators.required,           
      ]),
      'description': new FormControl(),
      'author': new FormControl(this.book.author, Validators.required)
    });
  } 

  get title() { return this.fg.get('title'); }
  get description() { return this.fg.get('description'); }
  get author() { return this.fg.get('author'); }

  submitBook(){
    if (this.fg.valid) {    
      this.api.addBook(this.book).subscribe(response => {}); 
      this.route.navigate([''])
    } else {
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();    
    }
  }

}