import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent {
  notes: Note[] = [];
  newNote: string = ' ';
  editingNoteId: number | null = null;

  constructor(private noteService: NotesService) {}

  get getNotes() {
    return (this.notes = this.noteService.getNotes());
  }
  addNote() {
    if (this.newNote.trim()) {
      this.notes.push({
        id: Date.now(),
        content: this.newNote,
        favorite: false,
      });
      this.newNote = '';
    }
  }
  updateNote() {
    const note = this.notes.find((n) => n.id === this.editingNoteId);
    if (note && this.newNote.trim()) {
      note.content = this.newNote;
      this.cancelEdit();
    }
  }
  cancelEdit() {
    this.editingNoteId = null;
    this.newNote = '';
  }

  toggleFavorite(note: Note) {
    note.favorite = !note.favorite;
  }
  editNote(note: Note) {
    this.editingNoteId = note.id;
    this.newNote = note.content;
  }

  deleteNote(id: number) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
