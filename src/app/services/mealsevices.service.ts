import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { IAltMeal, IDishes, IMeal, INextMeal, ITodaysMeals } from "src/data/interfaces/shared.interface";
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
    time: string = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
    timenow24Hr: string = new Date().toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });;
    data: Observable<INextMeal> = this.dataSource.asObservable();
    constructor() {
    }

    setNextMeal(data: any) {
        this.dataSource.next(data);
    }
    fetchalternateMeal(objectId: string): any {
        let altMeal: any;
        let _objectid = objectId == undefined ? '' : objectId;
        this.returnDietData().subscribe((dData: any) => { 
            let items: any = []
            let alternaltedish: any = dData.filter((x: IDishes) => x.objectId === _objectid)[0];
            alternaltedish.dish.forEach((element: IMeal) => { 
                items.push(element.item)
            });
            let meal: IAltMeal = {
                objectId: _objectid,
                mealcount: alternaltedish.dish.length,
                mealdata: items
            }
            altMeal = meal
        });
        return altMeal;

    }
    loadmealDatafortoday(today?: string): any {
        let todayData: any;
        let day = today == undefined ? this.day : today;
        this.returnDietData().subscribe((dData: any) => {

            if (this.timenow24Hr > "22:45:00") {
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                day = tomorrow.toLocaleString('en-us', { weekday: 'short' })
            }



            todayData = dData.map((elements: any) => {
                let dish = elements.dish.filter((x: any) => x.day.includes(day))

                let meal: ITodaysMeals = {
                    objectId: elements.objectId,
                    time: elements.time,
                    dishes: dish.length > 0 ? dish[0].item : [],
                    day: day
                }
                return meal
            })
        });
        return todayData;
    }



    getNextMeal(): Array<INextMeal> {
        let nmdata: any;
        this.returnDietData().subscribe((dData: any) => {
            if (this.timenow24Hr >= "22:45:00") {
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                this.day = tomorrow.toLocaleString('en-us', { weekday: 'short' })
            }
            nmdata = dData.map((data: any) => {
                if ((this.timenow24Hr <= data.time)) {
                    let dishes = data.dish.filter((x: any) => x.day.includes(this.day))
                    // data.time = this.fomatTime(data.time);
                    let nm: INextMeal = {
                        day: this.day,
                        time: data.time,
                        dishes: dishes[0].item
                    }
                    return nm;
                }
                return null;
            }).filter((x: any) => x != null)

        })
        return nmdata;
    }
    fomatTime(time: string) {
        // time = time.substring(0, 3) + ':' + time.substring(3);
        let date: Date = new Date(new Date().toLocaleDateString() + ' ' + time);
        let newtime = date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        return newtime;
    }
    timetonum(time: string) {
        let date: Date = new Date(new Date().toLocaleDateString() + ' ' + time);
        return date.getTime();
    }

    returnDietData(): any {
        return of(Object.assign(DietData))
    }

}
