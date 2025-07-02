import { Component } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskFormComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: Task) {
    this.taskService.addTask(task);
    this.taskService.getTasks();
    console.log(task);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    console.log(id, ' No task deleted..');
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }
}
