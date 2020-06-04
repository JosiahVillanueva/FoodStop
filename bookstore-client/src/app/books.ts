export class Books { 
  id: number;
  picture: String;
  title: String;
  description: String;
  rating: String;
  tag: String;
  bestSeller: String;
  openingHours: String;
  location: String;
  price: String;
  contactInformation: String;
  trending: String;

  constructor(id:number, picture:String, title:String, description:String, rating:String, tag:String, 
    bestSeller:String, openingHours:String, location:String, price:String, contactInformation:String,
    trending:String) {

    this.id = id;
    this.picture = picture;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.tag = tag;
    this.bestSeller = bestSeller;
    this.openingHours = openingHours;
    this.location = location;
    this.price = price;
    this.contactInformation = contactInformation;
    this.trending = trending;
  }
}