import { NgIf } from '@angular/common';

export class StoreTag { 
  storeTagId: number;
  id: number;
  tag: String;

  constructor(storeTagId:number, id:number, tag:String) {
    this.storeTagId = storeTagId;
    this.id = id;
    this.tag = tag;
  }
}