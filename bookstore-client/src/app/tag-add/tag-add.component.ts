import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.css']
})
export class TagAddComponent implements OnInit {
  tag: any = {};
  fg: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.fg = new FormGroup({
      'picture': new FormControl(this.tag.picture, [Validators.required,]),
      'tagName': new FormControl(this.tag.tagName, Validators.required),
      'tagDescription': new FormControl(),
      'tagHexColor': new FormControl(this.tag.tagHexColor, Validators.required)

    });
  }

  get picture() { return this.fg.get('picture'); }
  get tagName() { return this.fg.get('tagName'); }
  get tagDescription() { return this.fg.get('tagDescription'); }
  get tagHexColor() { return this.fg.get('tagHexColor'); }

  async submitTag() {
    if (this.fg.valid) {
      (await this.apiService.addTag(this.tag)).subscribe(res => { 
        this.router.navigate(['tag']);
      },
      err=>{
        console.log("On Add Status Code Error"+err.status)
      });
    } else {
      this.fg.get('picture').markAsTouched();
      this.fg.get('tagName').markAsTouched();
      this.fg.get('tagHexColor').markAsTouched();
    }
  }
}