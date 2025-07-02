import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  @Output() taskCreated = new EventEmitter<Task>();

  addTask() {
    console.log(this.title);
    if (!this.title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.title,
      completed: false,
      description: this.description,
    };
    this.taskCreated.emit(newTask);
    this.title = '';
    this.description='';
  }
}
