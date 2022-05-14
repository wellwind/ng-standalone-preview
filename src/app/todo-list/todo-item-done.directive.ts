import { Directive, HostBinding, Input } from '@angular/core';
import { TodoItem } from './todo-item.interface';

@Directive({
  selector: '[appTodoItemDone]',
  standalone: true,
})
export class TodoItemDoneDirective {
  @HostBinding('class.done') get textDecoration() {
    return this.appTodoItemDone.completed;
  }

  @Input() appTodoItemDone!: TodoItem;

  constructor() {}
}
