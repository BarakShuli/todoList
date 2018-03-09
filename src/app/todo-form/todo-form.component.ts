import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { TodoItem } from '../models/todo';
import { AddNewTodoItem } from '../store/actions/todo-action';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/reducers/todo-store';
import { Config } from '../shared/config';
import * as _ from "lodash";

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.less']
})
export class TodoFormComponent implements OnInit {

  private todoListLength: number = 0;
  private maxTasksLength:number = Config.maxNumberOfTasks;
  private elementText:string;
  
  @ViewChild('todoTxt') todoTxtEl:ElementRef;
  @select() todoList;

  constructor(private store: NgRedux<IAppState>) { }

  ngOnInit() {
   
  }

  addNewItem(element: string) {
    this.todoListLength = this.store.getState().todoList.length;
    console.log("this.store.getState().todoList-> ", this.store.getState().todoList);
    this.elementText = this.todoTxtEl.nativeElement.value;
    if(this.todoListLength <= (Config.maxNumberOfTasks-1)){
      let todo:TodoItem = {id: this.todoListLength + 1, text: `desc-${this.elementText}`, isDone: false};
      this.store.dispatch(new AddNewTodoItem().addTodo(todo));
      this.resetTextBox(this.todoTxtEl);
    }
  }

  resetTextBox(htmlElemet){
    htmlElemet.nativeElement.value = "";
    htmlElemet.nativeElement.focus();
  }
}
