import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IDishes, IMeal, INextMeal, ITodaysMeals } from "src/data/interfaces/shared.interface";
import { DietData } from "src/data/models/dietplans";

@Injectable({
    providedIn: 'root'
})

export class MealDataServices {
    private dataSource: BehaviorSubject<INextMeal> = new BehaviorSubject<INextMeal>({
        dishes: [],
        time: "",
        day: ""
    })
    day: string = `${new Date().toLocaleString('en-us', { weekday: 'short' })}`;
    weekday: string = `${new Date().toLocaleString('en-us', { weekday: 'long' })}`;
    time: string =   new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    data: Observable<INextMeal> = this.dataSource.asObservable();
    constructor() {

    }

    sendData(data: INextMeal) {
        this.dataSource.next(data);
    }
    loadmealDatafortoday(): Array<ITodaysMeals> {
        let todayData: Array<ITodaysMeals> = DietData.map(elements => {
            let dish = elements.dish.filter((x: any) => x.day.includes(this.day))
            let meal: ITodaysMeals = {
                time: this.fomatTime(elements.time),
                dishes: dish[0].item,
                day:this.day
            }
            return meal
        })
        let nextmealtime = todayData.map(x => {
            let xtime = x.time;
            if (x.time == "08:00") {
                xtime = "07:59"
            }  
            return { time: x.time, min: this.timetonum(x.time), dishes: x.dishes,day:this.day };
        })
        console.log(nextmealtime);
        
        let currtime = this.timetonum(this.time)  

        let nextmeal: any = nextmealtime.filter(x => {
            if (x.min > currtime) {
                x.day=this.weekday
                return x;
            }else{
                return null;
            } 
        }); 

        this.sendData(nextmeal[0]);


        return todayData
    }

    fomatTime(time: string) { 
        // time = time.substring(0, 3) + ':' + time.substring(3);
        let date: Date = new Date(new Date().toLocaleDateString() + ' ' + time);
        let newtime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return newtime; 
    }
    timetonum(time: string){
        let date: Date = new Date(new Date().toLocaleDateString() + ' ' + time);
        return date.getTime();
    }



}