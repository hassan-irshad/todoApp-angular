import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private todoService: TodoService, private http: Http) {
    // this.http.get("http://localhost:3000/todos").subscribe(res => {
    //   console.log(res.json().todos);
    // });
    this.todoService.getTodos().subscribe(x => {
      console.log(x);
    })
    
    
  }
  ngOnInit() {
    
  }
}
