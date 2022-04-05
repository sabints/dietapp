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
  nextmeal: Array<INextMeal> = [];
  planData: any = [];
  constructor(private mdService: MealDataServices, private router: Router) {

  }

  ngOnInit(): void { 
    this.nextmeal = this.mdService.getNextMeal();
    console.log(this.nextmeal);
    
  }

  gotolist() {
    this.router.navigate(['plan']);
  }
}
