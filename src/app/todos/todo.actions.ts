import { createAction, props } from "@ngrx/store";

export const crear = createAction(
      'TODO Crea Tarea o Todo',
      props<{ texto: string }>()
)