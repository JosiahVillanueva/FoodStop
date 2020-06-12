export class StoreTag { 
  id: number;
  storeId: String;
  tag: String;

  constructor(id:number, storeId:String, tag:String) {
    this.id = id;
    this.storeId = storeId;
    this.tag = tag;
  }
}