import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {
  students=[
    {"name": "Abc1","usn":"01fe19bcs144"},
    {"name": "Abc2","usn":"01fe19bcs145"},
    {"name": "Abc3","usn":"01fe19bcs146"},
  ];
  studentattendance=[
    {"name": "","usn":"","date":''},
    
  ];

 

  getstudent(){
    return this.students;
  }
  addattendance(name:string,usn:string, date:string)
  {
    this.studentattendance.push({"name":name ,"usn":usn,"date":date});
  }
  getattendance(){
    return this.studentattendance;
  }

  constructor() { }
}
