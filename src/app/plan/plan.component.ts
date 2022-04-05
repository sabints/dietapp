import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INextMeal, ITodayPlan } from 'src/data/interfaces/shared.interface';
import { MealDataServices } from '../services/mealsevices.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})

export class PlanComponent implements OnInit {
  public weekDays: Array<string> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  public day: string = `${new Date().toLocaleString('en-us', { weekday: 'short' })}`;
  public selectedDay: any = "";
  planData: any = [];
  constructor(private mdService: MealDataServices, private router: Router) { }

  
  ngOnInit(): void {
    this.selectedDay = this.day;
    this.LoadPlan()
    
  }

  LoadPlan() {
    this.planData = this.mdService.loadmealDatafortoday(this.selectedDay);
    console.log(this.planData);

  }

  selectday(itemday: string) {
    this.selectedDay = itemday
    this.LoadPlan()
  }

}
