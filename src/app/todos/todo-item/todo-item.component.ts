import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { toogleEstado } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() task:Todo  | undefined;
  @ViewChild('inputFisico') txtInputFisico: ElementRef | undefined;

  chkCompletado: FormControl | undefined;
  txtInput: FormControl | undefined;
  editing: boolean | undefined;
  
  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.task?.completado);
    this.txtInput = new FormControl(this.task?.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(toogleEstado({ id: this.task!.id }))
    })
  }

  edit() {
      this.editing = true;
      setTimeout(()=> {
        this.txtInputFisico?.nativeElement.select();
      }, 1)
  }


  endEdit() { 
    this.editing = false;
  }
}
