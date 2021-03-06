import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TaskListComponent } from './task-list.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    CompletenessPipe,
    TaskComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
