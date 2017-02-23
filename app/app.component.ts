import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My To-Do List</h1>
     <h3 *ngFor="let currentTask of tasks">{{ currentTask.description }} {{currentTask.priority}}</h3>
     <task-list
    [childTaskList]="tasks"
   ></task-list>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
      new Task("Do grocery shopping", "high", "work"),
      new Task("Practise yoga", "low", "hobbies"),
      new Task("Learn Angular js", "high","work"),
      new Task("Pay bills", "low","home")
  ];

}
