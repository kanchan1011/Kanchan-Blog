import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    CommonModule,RouterModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contact[] = [];
  searchContact: string = '';
  pageSize: number = 5;
  currentPage: number = 1;


  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.searchContact);
  }

  get totalPages(): number {
    const totalFiltered = this.contacts.filter((contact) => {
      contact.name.toLowerCase().includes(this.searchContact.toLowerCase()) ||
        contact.email
          .toLowerCase()
          .includes(this.searchContact.toLowerCase()) ||
        contact.phone.includes(this.searchContact);
    }).length;

    return Math.ceil(totalFiltered / this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
  }

  get pages(): number[] {
    return Array(this.totalPages)
      .fill(0)
      .map((_, i) => i + 1);
  }

  get filteredContacts():Contact[]{
     const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(this.searchContact.toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchContact.toLowerCase()) ||
        contact.phone.includes(this.searchContact)
      )
      .slice(startIndex, endIndex);  }
}
