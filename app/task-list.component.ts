import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CompletenessPipe } from './completeness.pipe';



@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="work">Show tasks listed under work</option>
      <option value="hobbies">Show tasks listed under hobbies</option>
      <option value="home" selected="selected">Show tasks listed under home</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness : 'I': 'Sheeja' ">
      <h3>{{ currentTask.description }}</h3>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  public selectedCompleteness: string = "home";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
}
