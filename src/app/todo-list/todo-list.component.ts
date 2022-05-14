import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';
import { TodoItem } from './todo-item.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TodoItemComponent],
  template: `
  <ul>
    <li *ngFor="let todoItem of todos$ | async">
      <app-todo-item [todoItem]="todoItem"></app-todo-item>
    </li>
  </ul>`,
})
export class TodoListComponent implements OnInit {

  todos$ = this.httpClient.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos');

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
