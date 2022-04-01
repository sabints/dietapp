import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INextMeal, ITodayPlan } from 'src/data/interfaces/shared.interface';
import { DietData } from 'src/data/models/dietplans';
import { MealDataServices } from '../services/mealsevices.service';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})

export class PlanComponent implements OnInit {

  planData = DietData;
  nextmeal: INextMeal = {
    day: "",
    time: "",
    dishes: []
  };
  TodayData: ITodayPlan = {
    day: `${new Date().toLocaleString('en-us', { weekday: 'short' })}`,
    time: new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }),
    dishes: []
  }
  constructor(private mdService: MealDataServices, private router: Router) { }


  ngOnInit(): void {
    this.LoadPlan();
    this.getnextmeal();
  }

  LoadPlan() {
    this.TodayData.dishes = this.mdService.loadmealDatafortoday();

  }
  getnextmeal() {
    this.mdService.data.subscribe((data: INextMeal) => {
      this.nextmeal = data
    })
  }
  gotolist() {
    this.router.navigate(['']);
  }

}
