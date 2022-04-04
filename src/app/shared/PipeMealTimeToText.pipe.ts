import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'MealName'
})
export class ConvertTimeToMealName implements PipeTransform {
    MealNames = [
        {
            time: "08:00:00",
            name: "Morning Drink"
        },
        {
            time: "08:30:00",
            name: "Breakfast"
        },
        {
            time: "10:30:00",
            name: "Morning Snack"
        },
        {
            time: "13:30:00",
            name: "Lunch"
        },
        {
            time: "16:00:00",
            name: "Evening Sncak"
        },
        {
            time: "20:30:00",
            name: "Dinner"
        },
        {
            time: "22:00:00",
            name: "Night Snack"
        },
    ]
    transform(time: string) { 
        let mealName = this.MealNames.filter(x => x.time == time )[0].name;
        return mealName;
    }


}