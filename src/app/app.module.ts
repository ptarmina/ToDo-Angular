import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CompleteDirective } from './directives/complete.directive';
import { TodoItemFormComponent } from './todo-item-form/todo-item-form.component';
import { TodoItemService } from  './services/todo-item.service';
import { TodoProgressComponent } from './todo-progress/todo-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodolistComponent,
    CompleteDirective,
    TodoItemFormComponent,
    TodoProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
