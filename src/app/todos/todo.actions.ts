import { createAction, props } from "@ngrx/store";

export const crear = createAction(
      'TODO Crea Tarea o Todo',
      props<{ texto: string }>()
)
//Action que coloca la tarea o completada o incompleta se dispara en los checkbox
export const toogleEstado = createAction(
      'TODO Action que coloca la tarea o completada o incompleta se dispara en los checkbox',
      props<{ id: number }>()
)