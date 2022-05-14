import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TodoItemDoneDirective } from './todo-item-done.directive';
import { TodoItemDonePipe } from './todo-item-done.pipe';
import { TodoItem } from './todo-item.interface';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, TodoItemDonePipe, TodoItemDoneDirective],
  template: `
    <span *ngIf="todoItem" [appTodoItemDone]="todoItem">
      {{ todoItem.title }} ({{ todoItem | todoItemDone }})
    </span>
  `,
  styles: [
    `
      .done {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItem | null = null;
  constructor() {}

  ngOnInit(): void {}
}
