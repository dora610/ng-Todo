import { Component } from '@angular/core';
import { Todo } from 'src/model/Todo';
import { Todos } from 'src/model/Todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple TODO app';
  todoList: Todo[] = Todos;
  todo: string = '';
  id: number = Todos.length + 1;

  addTodo(newTodoObj: Todo) {
    this.todoList.unshift(newTodoObj);
  }

  modifyTodo(modifedTodo: Todo) {
    this.todoList = this.todoList.map((todo) =>
      todo.id === modifedTodo.id ? modifedTodo : todo
    );
  }

  deleteTodo(deleteIndex: number) {
    this.todoList = this.todoList.filter((todo) => todo.id != deleteIndex);
  }

  todoReset = ()=> {
    this.todo = '';
  }
}
