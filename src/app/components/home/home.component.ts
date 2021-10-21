import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'src/app/studentdetails.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StudentdetailsService],
})
export class HomeComponent implements OnInit {

  public students: any;
  public satt:any;
  
  
  
  markattendance(frm: any) {
    console.log("Makred");
    console.log(frm)
    console.log(frm.value)

    for (let i = 0; i < this.students.length; i++) {
      if (frm.value.u0) {
        console.log("In 0")
        this.studentsdb.addattendance(this.students[0].name, this.students[0].usn, frm.value.date);
      }
      if (frm.value.u1) {
        console.log("In 1")
        this.studentsdb.addattendance(this.students[1].name, this.students[1].usn, frm.value.date);
      }
      if (frm.value.u2) {
        console.log("In 2")
        this.studentsdb.addattendance(this.students[2].name, this.students[2].usn, frm.value.date);
      }

    }
   
  }

  displayatt(){
    this.satt=this.studentsdb.getattendance();
  }
 constructor(private studentsdb: StudentdetailsService) { }

  ngOnInit(): void {
    this.students = this.studentsdb.getstudent();
    console.log(this.students);
  }


}
