import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdbService } from 'src/app/userdb.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [UserdbService],
})
export class LoginComponent implements OnInit {

  users:any;
  username: any;
  password: any;

  login(){
    console.log("In login");

    for(let i=0; i<this.users.length;i++)
    {
      console.log(this.users[i].username);
      console.log(this.users[i].password);
    }
    
    
   
    
    
    for(let i=0;i<this.users.length;i++)
    {
      if(this.username==this.users[i].username && this.password==this.users[i].password )
      {
        alert("success")
      this.route.navigate(['home']);
      }
      else 
      {
        alert("Invalid ")
      }
      

    }
  }
  reg()
  {
    this.userdb.adduser(this.username,this.password);
  }
  constructor(private userdb: UserdbService, private route: Router ) { }

  ngOnInit(): void {
    this.users = this.userdb.getusers();
    
  }
}
