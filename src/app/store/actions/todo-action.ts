
import { TodoItem } from "../../models/todo";
import { Action } from "@ngrx/store";
import { Config } from "../../shared/config";


export class AddNewTodoItem {
    readonly type = Config.ADD_NEW_TODO_ITEM;
    addTodo(todo) {  
        return { type: this.type, todo };
    }
}

export class ResetTodoList {
    readonly type = Config.RESET_STORE;
    resetStore() {  
        return { type: this.type};
    }
}

export type All = AddNewTodoItem | ResetTodoList; 