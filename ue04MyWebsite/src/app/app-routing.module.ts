import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreesComponent } from './trees.components';
import { CarsComponent } from './cars.components';

const routes: Routes = [
  { path: '', redirectTo: '/trees', pathMatch: 'full'},
  { path: 'trees', component: TreesComponent},
  { path: 'cars', component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
