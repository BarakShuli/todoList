import { AddNewTodoItem, ResetTodoList } from "../actions/todo-action";
import { TodoItem } from "../../models/todo";
import * as _ from "lodash";

// export interface TodoList {
// 	todoItem: TodoItem;
// }

export interface IAppState{
    todoList:TodoItem[];
}

export const INITIAL_STATE: IAppState = {
    todoList: []
}

export function RootReducer(state:IAppState, action) : IAppState{
    
    switch (action.type){
        case "ADD_NEW_TODO_ITEM":
        return Object.assign({}, state, {
            todoList: state.todoList.concat(Object.assign({}, action.todo))});

            // state = Object.assign({...state, todoList : action.todo});
            // return state;
        case "RESET_STORE":
            return Object.assign({}, state, {
                todoList: []});
        default:
            return state;
    }
}
