import { Action, createReducer, on } from '@ngrx/store';
import { validFilters, setFilter } from './filter.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state, {filter}) => filter)
);


export function filterReducer (state: any, action: any) {
      return _filterReducer(state, action)
}