import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    
      switch (filter) {
        case 'completados':
            return todos.filter(todo => todo.completado)
        case 'pendientes':
          return todos.filter(todo => !todo.completado)    
      
        default:
          return todos;
      }
  }

}
