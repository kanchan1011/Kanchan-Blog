import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    // for (let i = 1; i <= 50; i++) {
    //   this.contacts.push({
    //     id: i,
    //     name: `Kanchan ${i}`,
    //     email: `email${i}@gmail.com`,
    //     phone: `12345678${i.toString().padStart(2, '0')}`,
    //   });
    // }
    console.log(localStorage.getItem('contact'));
    this.getContacts();
  }

  getContacts(): Contact[] {
    return [...this.contacts];
  }

   setContacts(newContact: Contact) {
    this.contacts.unshift(newContact);
    this.getContacts();
  }
}
