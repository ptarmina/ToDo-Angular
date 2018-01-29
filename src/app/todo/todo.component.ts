import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() todoItem;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

	deleteTodo() {
		this.delete.emit(this.todoItem);
	}
  toggleComplete() {
    this.complete.emit(this.todoItem);
  }

}
