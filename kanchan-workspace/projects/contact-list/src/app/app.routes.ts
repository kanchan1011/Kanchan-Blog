import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact/contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'contact',pathMatch:'full'},
    {path:'contact',component:ContactComponent,title:' Search Contact'},
    {path:'add-contact',component:AddContactComponent,title:'Add Contact Page'}
];
