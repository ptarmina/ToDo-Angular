import { Component, OnInit } from '@angular/core';
import { TodoItemService } from '../services/todo-item.service';

@Component({
  selector: 'todo-progress',
  templateUrl: './todo-progress.component.html',
  styleUrls: ['./todo-progress.component.css']
})
export class TodoProgressComponent implements OnInit {
	percent;

  constructor(private todoItemService: TodoItemService) { };

  ngOnInit() {
  }

  getTotal(){
    return  this.todoItemService.total();
  }

  getPercent(){
		return  this.todoItemService.percent();
  }
}
