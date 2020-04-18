import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  book: any = {};
  id: String;
  fg: FormGroup;

  constructor(private api: ApiService, private route: ActivatedRoute, private routeTwo: Router) {}

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
      this.id = this.route.snapshot.paramMap.get('id');
      this.api.updateBook(this.id, this.book).subscribe();
      this.routeTwo.navigate([''])
    } else {
      this.fg.get('title').markAsTouched();
      this.fg.get('author').markAsTouched();    
    }
  }

}
