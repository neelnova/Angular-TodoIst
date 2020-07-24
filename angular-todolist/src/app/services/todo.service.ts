import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Todo} from '../models/Todo';

const httpOptions ={
  headers :new HttpHeaders({
    'Content-Type' :'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos';
  Limit:string  = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
      return this.http.get<Todo[]>(`${this.todosURL}${this.Limit}`);
  }

  //completed todo
  toggleCompleted(todo :Todo):Observable<any>{
    const url =`${this.todosURL}/${todo.id}`; 
    return this.http.put(url,todo,httpOptions);
  }

  //delete todo
  deleteTodo(todo:Todo):Observable<Todo>{
    const url =`${this.todosURL}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }


  //add todo 
    addTodo(todo:Todo):Observable<Todo>{
      return this.http.post<Todo>(this.todosURL,todo,httpOptions);
    }
  }
