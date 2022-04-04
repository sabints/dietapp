import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'Convert24To12' })
export class Convert24To12HourFormat implements PipeTransform {
    transform(time: string): any {
        var time24To12 = (a: any) => {
            //below date doesn't matter.
            return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
                timeZone: "UTC",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit"
            });
        };

        return time24To12(time);
    }
}
