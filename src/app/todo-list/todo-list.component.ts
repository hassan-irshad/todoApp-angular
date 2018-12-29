import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  selectedTodo: Todo;
  constructor(private todoService: TodoService) {
    
   }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  selectedTodoIndex(index: number) {
    this.selectedTodo = this.todos[index];
  }

  deleteTodo(id, i) {
    this.todos.splice(i);
    this.todoService.deleteTodos(id).subscribe(res => {
      console.log(res);
    });
  }

}
