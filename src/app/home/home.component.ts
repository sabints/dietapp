import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INextMeal } from 'src/data/interfaces/shared.interface';
import { MealDataServices } from '../services/mealsevices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nextmeal: INextMeal = {
    day: `${new Date().toLocaleString('en-us', { weekday: 'short' })}`,
    time: "",
    dishes: []
  };

  constructor(private mdService: MealDataServices, private router: Router) {
    debugger;
  }

  ngOnInit(): void {
    debugger;
    this.nextmeal = this.mdService.getNextMeal();
  }

  gotolist() {
    this.router.navigate(['plan']);
  }
}
