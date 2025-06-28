import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  newContact: Contact = { id: 0, name: '', email: '', phone: '' };
  contacts: Contact[] = [];

  constructor(private contactService:ContactService) {}

  addContact() {
  const maxId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) : 0;
  const newEntry: Contact = {
    id: maxId + 1,
    name: this.newContact.name,
    email: this.newContact.email,
    phone: this.newContact.phone
  };

  this.contacts.unshift(newEntry); // Add to beginning of list
  this.contactService.setContacts(newEntry);
  this.newContact = { id: 0, name: '', email: '', phone: '' }; // Reset form
  
  }
}
