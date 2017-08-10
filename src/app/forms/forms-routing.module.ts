import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassicComponent} from './classic/classic.component';
import {Classic2Component} from './classic2/classic2.component';

const routes: Routes = [
  {path: 'classic', component: ClassicComponent},
  {path: 'classic2', component: Classic2Component}
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class FormsRoutingModule {
}
