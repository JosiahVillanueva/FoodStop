export class Books { 
  id: number;
  title: String;
  description: String;
  author: String;

  constructor(id:number, title:String, description:String, author:String) {
    this.id = id;
    this.title = title;
    this.description = description;
    // this.author = author;
  }
}