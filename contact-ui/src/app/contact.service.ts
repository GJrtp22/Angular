import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDetaills } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl="http://localhost:9090";

  constructor(private httpClient:HttpClient) { }

  createContact(contact: ContactDetaills):Observable<String>{
    console.log(contact);
    return this.httpClient.post(`${this.baseUrl}/contact`,contact,{responseType:"text"});
  }

  getContacts():Observable<ContactDetaills[]>{

    return this.httpClient.get<ContactDetaills[]>(`${this.baseUrl}/contacts`);

  }

  removeContact(contactId:number):Observable<String>{
    return this.httpClient.delete(`${this.baseUrl}/${contactId}`, {responseType:"text"});
  
  }

  findContact(contactId:number):Observable<ContactDetaills>{
    return this.httpClient.get<ContactDetaills>(`${this.baseUrl}/${contactId}`);
  }
}

