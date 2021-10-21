import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {
  public users=[{ "username": "abc","password":"abc"}];

 
  adduser(username:string,password:string){
    this.users.push({"username":username,"password":password});
    alert("Registraion Successfull");
    
  }
  getusers() {
    return this.users;
  }


  constructor() { }
}
