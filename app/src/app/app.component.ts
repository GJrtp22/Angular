import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname:string = "Adam";
  lname:string = "Smith";
  age:number=25;
  gender:string="Male";
  country:string="India";
  isEmployed:boolean=true;

  handleSubmitBtn(){
     this.fname = "John";
     this.lname="Buttler";
     this.age = 30;
     this.gender= "Male";
     this.country="USA";
     this.isEmployed=false;
  }
}
