import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: any = {};
  id: String;
  fg: FormGroup;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {}

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

  updateBook(){
    if (this.fg.valid) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.apiService.updateBook(this.id, this.book).subscribe(res => { 
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
