import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.saveToStorage();
  }

  updateTask(editedTask: Task) {
    const index = this.tasks.findIndex((task) => task.id == editedTask.id);
    if (index !== -1) {
      this.tasks[index] = editedTask;
      this.saveToStorage();
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToStorage();
  }
  saveToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
