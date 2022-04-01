import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {
    path:'',
    component:PlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
