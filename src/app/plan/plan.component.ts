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
 
  nextmeal: Array<INextMeal>=[];
  TodayData: ITodayPlan = {
    day: `${new Date().toLocaleString('en-us', { weekday: 'short' })}`,
    time: new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }),
    dishes: []
  }
  constructor(private mdService: MealDataServices, private router: Router) { }


  ngOnInit(): void {
    this.nextmeal = this.mdService.getNextMeal();
    this.LoadPlan(); 
  }

  LoadPlan() {
    this.TodayData.dishes = this.mdService.loadmealDatafortoday();

  }
  
  gotolist() {
    this.router.navigate(['']);
  }

}
