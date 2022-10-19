import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'John';
  googleURL: string = 'https://www.google.com.vn/';
  colspan = 2;
  i: number = 0;
  constructor() {}

  ngOnInit(): void {}
  onBtnClick() {
    console.log('clicked');
  }
  addBtn(event) {
    console.log(event);
    this.i = this.i + 1;
  }
  substractBtn() {
    this.i = this.i - 1;
  }
}
