import { Component, OnInit } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

@Component({
  selector: 'todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.css']
})
export class TodoItemFormComponent implements OnInit {

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit() {
  }

  onSubmit(todoItem){
  	this.todoItemService.add(todoItem);
  }

}