import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

export const routes: Routes = [
     {path:'',pathMatch:'full',redirectTo:'/note'},
    {path:'note',component:NotesComponent,title:'List of notes'},
   ];
