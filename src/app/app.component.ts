import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple TODO app';
  todos: any = [];

  todo: String = '';

  addTodo(todo: String) {
    this.todos.unshift(todo);
  }

  // with formControl
  addTodoWithKey() {
    this.todos.unshift(this.todo);
  }

  deleteTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
  }

  todoReset() {
    this.todo = '';
  }
}
