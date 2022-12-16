import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:String="";
  password:String="";
  confirmPassword:String="";
  gender:String="";
  country:String="";
  licenseAgreement:boolean=false;

  msg:String="";

  RegisterClick(){
    this.msg= "Username : "+this.userName+"<br/>Password:"+this.password
    +"<br/>ConfirmPassword:"+this.confirmPassword
    +"<br/>Gender : "+this.gender+"<br/>Country : "+this.country
    +"<br/>License Agreement : "+this.licenseAgreement;
  }
}
