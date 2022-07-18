import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comer en taqueria'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.toogleEstado, (state, {id}) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      return todo;
     
    })
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      }
      return todo;
     
    })
  }),

  on(actions.borrar, (state, {id}) => {
    return state.filter(todo => {
        return todo.id !== id
    })
  }),

  on(actions.toogleAll, (state, {completado}) => {
    return state.map(todo => {
        return {
          ...todo,
          completado: completado
        }
    })
  }),

  on(actions.clearCompleted, state => state.filter( todo => !todo.completado ))
);



export function todoReducer (state: any, action: any) {
      return _todoReducer(state, action)
}