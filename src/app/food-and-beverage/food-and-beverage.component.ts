import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-and-beverage.component.html',
  styleUrls: ['./food-and-beverage.component.css']
})
export class FoodAndBeverageComponent {

  constructor(private router: Router) {}
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
