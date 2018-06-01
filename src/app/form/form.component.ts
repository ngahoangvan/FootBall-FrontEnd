import { Component, OnInit } from '@angular/core';
import { FoodService } from '../dashboard/food_service/food.service';
import { DrinkService } from '../dashboard/drink_service/drink.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  countDrink:String;
  countFood:String;

  constructor(private _foodService:FoodService, private _drinkService:DrinkService) { }

  ngOnInit() {
    this.getCount()
  }

  getCount(){
    this._drinkService.getCount().subscribe((data)=>{
      this.countDrink = data;
    },(error)=>{
      console.log(error)
    })

    this._foodService.getCount().subscribe((data)=>{
      this.countFood = data;
    },(error)=>{
      console.log(error)
    })
  }

}
