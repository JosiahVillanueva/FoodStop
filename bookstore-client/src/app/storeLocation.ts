export class StoreLocation { 
  id: number;
  address: String;
  city: String;
  zipCode: String;

  constructor(id:number, address:String, city:String, zipCode:String) {
    this.id = id;
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
  }
} 