import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.work === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="task.home === true" type="checkbox" (click)="toggleDone(true)"/>
    <input *ngIf="task.hobbies === true" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
  }
}
