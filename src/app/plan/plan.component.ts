import { Component, OnInit } from '@angular/core';
import { DietData } from 'src/data/models/dietplans';

interface ITodayPlan {
  time: string,
  day: string,
  dishes: any
}
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})

export class PlanComponent implements OnInit {

  planData = {
    today: ` ${new Date().toLocaleString('en-us', { weekday: 'short' })}`,
    time: new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }),
    data: DietData,

  }
  nextmeal: any = {};
  TodayData: ITodayPlan = {
    day: `${new Date().toLocaleString('en-us', { weekday: 'short' })}`,
    time: new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" }),
    dishes: []
  }
  constructor() {

    this.nextmeal = this.planData.data.filter(x => x.time >= this.planData.time)[0]
    // console.log(this.nextmeal);

    this.planData.data.map(x => x.time).forEach(x => {
      var planDatetime = new Date().toDateString() + " " + x
      // var date = new Date().toDateString() + " " + this.planData.time
      // console.log(date + "- - -" + planDatetime);
      // console.log(Date.parse(date) > Date.parse(planDatetime));

    })

  }

  ngOnInit(): void {

    this.LoadPlan();
  }

  LoadPlan() {
    this.TodayData.dishes = this.planData.data.map(elements => {
      let dish: any = elements.dish.filter(x => x.day.includes("Fri"))
      return { time: elements.time, dish: dish[0].item };
    })
    console.clear();

    console.log(this.TodayData.dishes);
  }

}
