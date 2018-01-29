import { Component, OnInit } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
	todoItems;

  constructor(private todoItemService: TodoItemService) { };

  ngOnInit() {
  	this.todoItems = this.todoItemService.get();
  }

	onToDoItemDelete(todoItem){
		this.todoItemService.delete(todoItem);
	}

  onToDoItemComplete(todoItem){
    this.todoItemService.complete(todoItem);
  }
}