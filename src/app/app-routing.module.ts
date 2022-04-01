import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
