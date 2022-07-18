import { createAction, props } from "@ngrx/store";

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
      '[Filtro] Set Filtro', 
      props<{ filter: validFilters }>()
);