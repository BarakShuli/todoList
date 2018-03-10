
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { TodosModule } from './todos/todos.module';

const routes:Routes = [
  {
    path: '', redirectTo: '/todos', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers: []
 
})
export class RoutingModule { }