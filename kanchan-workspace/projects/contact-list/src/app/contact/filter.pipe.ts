import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(contacts: Contact[], search: string): Contact[] {
    if (!search) return contacts;
    search = search.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search) ||
        contact.phone.includes(search)
    );
  }
}
