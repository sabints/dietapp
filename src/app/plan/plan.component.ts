import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAltMeal, INextMeal, ITodayPlan } from 'src/data/interfaces/shared.interface';
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
  public altmeal: any = {};
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
    this.selectedDay = itemday;
    this.altmeal = {};
    this.LoadPlan()
  }
  alternate(obid: string) {
    debugger;
    let data = this.mdService.fetchalternateMeal(obid);
    if (obid != this.altmeal.objectId) {

      this.altmeal.objectId = data.objectId;
      let findname = this.planData.filter((x: any) => x.objectId == obid)[0].dishes[0].name;
      let dataitem = data.mealdata.map((data: any) => {
        let find = data.filter((x: any) => x.name == findname)
        if (find.length > 0)
          return null
        return data
      }).filter((x: any) => x != null);
      this.altmeal.mealcount = dataitem.length - 1;
      this.altmeal.mealdata = dataitem;
    } else {
      this.altmeal.mealcount = this.altmeal.mealcount - 1
    }
    if (this.altmeal.mealcount < 0) {
      this.altmeal = {};
    }

  }

}
