import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TodoItem} from "../models/todo";
import { NgRedux, select, select$ } from '@angular-redux/store';
import { IAppState } from '../store/reducers/todo-store';
import { AddNewTodoItem, ResetTodoList } from '../store/actions/todo-action';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @select() todoList;
  
  constructor(private store: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearStore(){
    this.store.dispatch(this.store.dispatch(new ResetTodoList().resetStore()));
  }
}
