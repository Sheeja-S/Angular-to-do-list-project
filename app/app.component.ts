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
      new Task("Learn javascript", "high", "work"),
      new Task("Learn TypeScript", "low", "hobbies"),
      new Task("Learn Angular js", "high","work"),
      new Task("Learn Ember js", "low","home")
  ];

}
