import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';
import { Convert24To12HourFormat } from './shared/Pipe24HrsTo12Transform';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    HomeComponent,
    Convert24To12HourFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
