import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Convert24To12HourFormat } from './Pipe24HrsTo12Transform.pipe';
import { ConvertTimeToMealName } from './PipeMealTimeToText.pipe';
import { MuiFooterComponent } from './Components/mui-footer/mui-footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Convert24To12HourFormat,
    ConvertTimeToMealName,
    MuiFooterComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports:[
    Convert24To12HourFormat,
    ConvertTimeToMealName,
    MuiFooterComponent
  ]
})
export class SharedModule { }
