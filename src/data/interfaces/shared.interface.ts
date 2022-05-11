export interface INextMeal {
    time: string,
    day:string, 
    dishes: Array<IMealItems>
}

export interface ITodayPlan {
    time: string,
    day: string,
    dishes: Array<ITodaysMeals>
}
export interface ITodaysMeals {
    objectId:string,
    time: string, 
    dishes: Array<IMealItems>
    day: string,
}
export interface IMealItems{
    name:string,
    unit:string
}
export interface IMeal {
    day: Array<string>,
    item: Array<IMealItems>,
    next:boolean
}
export interface IDishes{
    objectId:string,
    time:string,
    dish:Array<IMeal> 
}

export interface IAltMeal{
    objectId:string,
    mealdata:IDishes,
    mealcount:number;
}
 