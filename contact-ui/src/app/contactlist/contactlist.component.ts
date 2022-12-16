import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactDetaills } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts:ContactDetaills[]=[];
  constructor(private contactService:ContactService, private router:Router)
  {

  }

  ngOnInit(): void {
    this.getContacts();
    
  }
  getContacts() {
    this.contactService.getContacts().subscribe(data => { this.contacts=data});
  }

  deleteContact(id:number)
  {
    this.contactService.removeContact(id).subscribe(
      data => { console.log(data); this.getContacts();},
      error => {console.log("Fail"); console.log(error);}
      );
  }


  editContact(id:number)
  {
    console.log("Edited :: "+id);
    this.router.navigate(['/edit',id]);
  }

  

}
