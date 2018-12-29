import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from './models/todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(private http: Http) { 
    // this.http.get('http://localhost:3000/todos')
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }

  getTodos() {
    return this.http.get("http://localhost:3000/todos").pipe(map(res => (res.json()).todos));
  }

  postTodos(value) {
    return this.http.post("http://localhost:3000/todos", value).pipe(map(res => res.json()));
  }
  deleteTodos(id) {
    return this.http.delete(`http://localhost:3000/todos/${id}`).pipe(map(res => res.json()));
  }
}
