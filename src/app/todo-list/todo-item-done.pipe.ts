import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo-item.interface';

@Pipe({
  name: 'todoItemDone',
  standalone: true
})
export class TodoItemDonePipe implements PipeTransform {

  transform(todoItem: TodoItem): unknown {
    return todoItem.completed ? 'Done' : 'Undone'
  }

}
