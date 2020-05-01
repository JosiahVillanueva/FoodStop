export class User { 
  id: number;
  username: String;
  password: String;

  constructor(id:number, username:String, password:String) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}