export class Tag { 
  id: number;
  picture: String;
  tag_name: String;
  tag_description: String;
  tag_hex_color: String;

  constructor(id:number, picture:String, name:String, description:String, hexColor:String) {
    this.id = id;
    this.picture = picture;
    this.tag_name = name;
    this.tag_description = description;
    this.tag_hex_color = hexColor;
  }
} 