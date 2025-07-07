import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent,title:'Login Page'},
    {path:' ',pathMatch:'full',redirectTo:'/login'},
    {path:'user-list',component:UserListComponent,title:'User List'},
    {path:'user-edit/:id',component:UserEditComponent,title:'Edit User'},
    {path:'user-detail/:id',component:UserDetailsComponent,title:'Details of User'}
];
