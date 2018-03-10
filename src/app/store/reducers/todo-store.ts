import { AddNewTodoItem, ResetTodoList } from "../actions/todo-action";
import { TodoItem } from "../../models/todo";
import * as _ from "lodash";

// }

export interface IAppState{
    todoList:TodoItem[];
    extraTaskText:string
}

export const INITIAL_STATE: IAppState = {
    todoList: [],
    extraTaskText:""

}

export function RootReducer(state:IAppState, action) : IAppState{
    
    switch (action.type){
        case "ADD_NEW_TODO_ITEM":
        return Object.assign({}, state, {
            todoList: state.todoList.concat(Object.assign({}, action.todo))});
        case "RESET_STORE":
            return Object.assign({}, state, {
                todoList: []});
        case "SET_EXTRA_TEXT":
            return {...state, extraTaskText:action.text};
        default:
            return state;
    }
}
