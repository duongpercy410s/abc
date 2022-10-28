import { TodoService, Todo } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private TodoService: TodoService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.TodoService.getTodo(id).subscribe(
      (res: Todo) => {
        this.todo = res;
      },
      (err) => {}
    );
  }
}
