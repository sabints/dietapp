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
    day: "",
    time: "",
    dishes: []
  };
  constructor(private mdService: MealDataServices, private router: Router) { }

  ngOnInit(): void {
    let data = this.mdService.loadmealDatafortoday()
    this.getnesxtmeal();

  }
  getnesxtmeal() {
    this.mdService.data.subscribe((x: INextMeal) => {
      this.nextmeal = x;
    })
  }
  gotolist() {
    this.router.navigate(['plan']);
  }
}
