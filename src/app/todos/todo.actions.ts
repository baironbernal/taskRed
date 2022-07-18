import { createAction, props } from "@ngrx/store";

export const clearCompleted = createAction('TODO Limpiar items completados');
export const crear = createAction(
      'TODO Crea Tarea o Todo',
      props<{ texto: string }>()
);
export const toogleEstado = createAction(
      'TODO Checkbox editar estado (completado o no) de Todo',
      props<{ id: number }>()
);

export const editar = createAction(
      'TODO Editar texto de tarea o Todo',
      props<{ id: number, texto: string }>()
);

export const borrar = createAction(
      'TODO Borrar Todo',
      props<{ id: number }>()
);

export const toogleAll = createAction(
      'TODO Completar todos los TODO',
      props<{ completado: boolean }>()
);

