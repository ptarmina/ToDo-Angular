import { Injectable } from '@angular/core';

@Injectable()
export class TodoItemService {
	_ID = 'nf-todo';
	id = 0;

  constructor() { }

  get(){
  	this.todoItems = JSON.parse(localStorage.getItem(this._ID) || '[]');
  	return this.todoItems;
  };

  delete(todoItem){
  	let index = this.todoItems.indexOf(todoItem);
  	if(index >=0){
  	this.todoItems.splice(index,1);
  	this.update(this.todoItems);
  	}
  };

  add(todoItem){
  	todoItem['id'] = this.id++;
  	todoItem['isComplete'] = false;
  	this.todoItems.push(todoItem);
  	this.update(this.todoItems)
  }

  update(todoItems){
  	localStorage.setItem(this._ID, JSON.stringify(todoItems));
  }

  complete(todoItem){
    let index = this.todoItems.indexOf(todoItem);
    this.todoItems[index] = todoItem;
    this.update(this.todoItems);
  }

  total(){
    return this.todoItems.length;
   }

  percent(){

    let total = this.todoItems.length;
    let completed  = this.todoItems.filter(this.getComplete).length;
    let complete = Math.floor((completed/total)*100);

    return complete;
  }

  getComplete(element){
    return (element.isComplete);
  }

	todoItems = [

	];
}
