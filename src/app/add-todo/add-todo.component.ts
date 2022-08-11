import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/model/Todo';
import { Todos } from 'src/model/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: string = '';
  id: number = Todos.length + 1;

  @Output() addItem = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    if (!this.todo) return;
    let newTodoEle: Todo = {
      id: this.id++,
      name: this.todo,
      isCompleted: false,
    };
    this.addItem.emit(newTodoEle);
  }

  todoReset() {
    this.todo = '';
  }

}
