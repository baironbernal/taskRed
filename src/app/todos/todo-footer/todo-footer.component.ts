import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'todos';
  filters: validFilters[] = ['completados', 'pendientes', 'todos'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    })
  }

  setFilter(filter: validFilters) {
    this.store.dispatch(setFilter({filter}))
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted())
  }

}
