import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-update',
  templateUrl: './tag-update.component.html',
  styleUrls: ['./tag-update.component.css']
})
export class TagUpdateComponent implements OnInit {
  tag: any = {};
  fg: FormGroup;
  id: string;
  
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
  get tagHexColor() { return this.fg.get('tagHexColor') }; 

  async submitTag() {
    if (this.fg.valid) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');

      (await this.apiService.updateTag(this.id, this.tag)).subscribe(res => { 
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
