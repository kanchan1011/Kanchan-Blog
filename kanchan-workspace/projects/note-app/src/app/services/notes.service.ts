import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];
  constructor() {}


  getNotes(){
    return this.notes;
  }
 }
