import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Todo {
  userId: number;
  id: number | string;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    // return this.todos;
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
  deleteTodo(id: Number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
  addNewTodo(todo) {
    return this.http.post(this.baseURL + '/todos', todo);
  }
}
