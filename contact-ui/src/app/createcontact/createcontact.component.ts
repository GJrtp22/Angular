import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactDetaills } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  ngOnInit(): void {
    
  }

  contact:ContactDetaills=new ContactDetaills();

  constructor(private contactService:ContactService, private router:Router)
  {

  }

  onSubmit()
  {
    console.log(this.contact);
    this.saveContact();
  }
  saveContact() {
    this.contactService.createContact(this.contact).subscribe(
      data => {console.log("sucessful"); console.log(data); this.redirectToContactList();},
      error => { console.log("failed"); console.log(error);}
    );
  }
  redirectToContactList() {
    this.router.navigate(['/contacts']);
  }

}
