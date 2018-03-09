import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TodosModule} from "./todos/todos.module";
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
//import { NgRedux, NgReduxModule } from 'ng2-redux';
import {IAppState, RootReducer, INITIAL_STATE} from './store/reducers/todo-store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TodosModule,
    NgReduxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux:NgRedux<IAppState>){
    
    ngRedux.configureStore(RootReducer, INITIAL_STATE);
  }
 }
