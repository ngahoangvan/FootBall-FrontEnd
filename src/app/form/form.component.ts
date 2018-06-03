import { Component, OnInit } from '@angular/core';
import { FoodService } from '../dashboard/food_service/food.service';
import { DrinkService } from '../dashboard/drink_service/drink.service';
import { Drink } from '../dashboard/assets/drink';
import { Food } from '../dashboard/assets/food';

import {Router} from "@angular/router"
import { StadiumService } from '../table-list/stadium-service/stadium-service.service';

declare var $:any;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  countDrink:String;
  countFood:String;

  water:Drink = new Drink();
  food:Food = new Food();

  stadium:any

  constructor(private _router:Router,private _foodService:FoodService, private _drinkService:DrinkService,
              private _stadiumService:StadiumService) { }

  ngOnInit() {
    this.getCount()
    this.getStadium()
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
  getStadium(){
    this._stadiumService.getStadium().subscribe((data)=>{
      this.stadium = data;
      console.log(data);
    },(error)=>{
      console.log(error)
    })
  }

  newDrink(){
    let drink = new  Drink();
    this._drinkService.setterDrink(drink);
  }
  addDrinkForm(){
    if(this.water.idDrink == undefined){
      this._drinkService.createDrink(this.water).subscribe((data) =>{
        console.log(data);
        window.location.reload();
      }, (error) =>{
        console.log(error);
      })
    }
   
  }

  newFood(){
    let food = new  Food();
  }
  addFoodForm(){
    if(this.food.idFood == undefined){
      this._foodService.createFood(this.food).subscribe((data) =>{
        console.log(data);
        window.location.reload();
      }, (error) =>{
        console.log(error);
      })
    }
  }


  

  


}
