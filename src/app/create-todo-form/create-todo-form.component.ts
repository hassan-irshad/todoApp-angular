import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.css']
})
export class CreateTodoFormComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  addTodo(values: any) {
    this.router.navigate['/create-todo'];
    this.todoService.postTodos(values).subscribe(res => {
      console.log(res);
    });
  }

}
