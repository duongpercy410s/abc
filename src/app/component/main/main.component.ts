import { AlbumsService, Album } from './../../services/albums.service';
import { TodoService, Todo } from './../../services/todo.service';
import { Component, OnInit, ɵCurrencyIndex } from '@angular/core';
// import { TodoService } from '../../services/todo.service';
interface TodoType {
  id: number;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = '';

  listTodo: string[] = ['Todo 1', 'Todo2', 'Todo3'];
  listTodo1: TodoType[] = [
    { id: 1, content: ' Todo1', complete: false },
    { id: 2, content: ' Todo2', complete: false },
    { id: 3, content: ' Todo3', complete: true },
    { id: 4, content: ' Todo4', complete: false },
  ];
  googleURL: string = 'https://www.google.com.vn/';
  colspan = 5;
  temp: boolean = true;
  id: number = 0;
  selectedNavTab = 'tab1';
  titles: string = '';
  newTodo: string = ' ';
  i: number = 0;
  userName = 'Duong';
  todos: Todo[] = [];
  albums: Album[] = [];
  today: Date = new Date();
  price: Number = 1.99999999;

  constructor(private todoService: TodoService, albumService: AlbumsService) {
    albumService.getAllAlbums().subscribe((res: Album[]) => {
      this.albums = res;
    });
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }
  helloClick() {
    this.listTodo1.push({
      id: this.id,
      content: this.name,
      complete: false,
    });
    this.name = ' ';
    this.id += 1;
  }
  increase() {
    this.colspan += 1;
  }
  decrease() {
    this.colspan -= 1;
  }

  onBlur(event) {
    this.userName = event.target.value;
    console.log(this.userName);
  }

  selectedTab(value) {
    this.selectedNavTab = value;
  }

  handleAddinput() {
    this.listTodo1.push({
      id: this.id,
      content: this.name,
      complete: false,
    });
    this.name = ' ';
    this.id += 1;
  }

  userId: number = 0;
  completed: boolean = false;
  addButton() {
    // this.todos.push({
    //   userId: this.userId,
    //   id: this.id,
    //   title: this.titles,
    //   completed: this.completed,
    // });
    // this.titles = '';
    // this.id += 1;
    // this.userId += 1;

    // console.log(this.todos);
    // console.log(this.titles);

    this.addNewTodo();
  }
  delete1(id: number) {
    //this.listTodo1.pop();
    const object: number = this.listTodo1.findIndex((value) => {
      return value.id == id;
    });
    this.listTodo1.splice(object, 1);
  }

  complete(index) {
    this.listTodo1[index].complete = !this.listTodo1[index].complete;
  }
  addNewTodo() {
    var newTodo = {
      userId: this.userId,
      id: this.id,
      title: this.titles,
      completed: this.completed,
    };

    this.todoService.addNewTodo(newTodo).subscribe(
      (res: Todo) => {
        this.todos.unshift(res);
      },
      (err) => {}
    );
    this.newTodo = ' ';
    // this.todos.push({
    //   userId: this.userId,
    //   id: this.id,
    //   title: this.titles,
    //   completed: this.completed,
    // });
    this.titles = '';
    // this.id += 1;
    // this.userId += 1;
    // this.titles = '';
  }
  onBtnClick() {
    console.log('clicked');
    alert('asdasdsad');
  }
  toogleTodo(index) {
    this.todos[index].completed = !this.todos[index].completed;
    console.log(this.todos[index].completed);
  }

  addBtn(event) {
    console.log(event);
    this.i = this.i + 1;
  }

  deleteIndex(index) {
    // console.log(index);
    this.todoService.deleteTodo(this.todos[index].id as Number).subscribe(
      (res) => {
        this.todos.splice(index, 1);
      },
      (err) => {}
    );
  }

  deleteIndex2(index) {
    this.albums.splice(index, 1);
  }
  substractBtn() {
    if (this.i > 0) {
      this.i = this.i - 1;
    }
    if (this.i <= 0) {
      this.i = 0;
    } else {
      this.i = this.i - 1;
    }
  }
}
