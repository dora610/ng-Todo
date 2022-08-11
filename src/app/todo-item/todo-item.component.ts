import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem!: Todo;

  @Output() deleteItem = new EventEmitter<number>();
  @Output() modifyItem = new EventEmitter<Todo>();

  toBeUpdated = false;

  constructor() {}

  ngOnInit(): void {}

  deleteTodoItem() {
    this.deleteItem.emit(this.todoItem.id);
  }

  updateTodoItem() {
    this.toBeUpdated = true;
  }

  modifyTodoItem(newTodo: string){
    if(!newTodo) return;
    let newTodoObj: Todo= {...this.todoItem, name: newTodo}
    this.modifyItem.emit(newTodoObj);
    this.toBeUpdated=false
  }
}
