import { Component, OnInit } from '@angular/core';
import { FoodService } from '../dashboard/food_service/food.service';
import { DrinkService } from '../dashboard/drink_service/drink.service';
import { Drink } from '../dashboard/assets/drink';
import { Food } from '../dashboard/assets/food';

import {Router} from "@angular/router"
import { StadiumService } from '../table-list/stadium-service/stadium-service.service';
import { CustomerService } from '../dashboard/customer-service/customer.service';
import { OrderService } from './order-service/order-service.service';
import { Customers } from '../table-list/assets/customers';
import { Order } from './assets/order';
import { DatePipe } from '@angular/common';

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
  customer:Customers = new Customers();
  order:Order = new Order();

  stadium:any

  constructor(private _router:Router,
              private _foodService:FoodService,
              private _drinkService:DrinkService,
              private _stadiumService:StadiumService,
              private _customerService:CustomerService,
              private _orderService:OrderService,
              public datepipe: DatePipe) { }

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
      // console.log(data);
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
        // console.log(data);
        alert("Adding Drink Successful")
        window.location.reload();
      }, (error) =>{
        alert("Adding Drink UnSuccessful")
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
        alert("Adding Food Successful")
        window.location.reload();
      }, (error) =>{
        alert("Adding Food Unsuccessful")
        console.log(error);
      })
    }
  }


  createOrder(){
    if(this.customer.idCustomer == undefined){
      this.customer.date=this.datepipe.transform(this.customer.date,"yyyy-MM-dd HH:mm:ss");
      this._orderService.creatOrder(this.customer).subscribe((data) =>{
        this._orderService.createPutStadium(this.order).subscribe((data) =>{
          // console.log(data);
          alert("Adding Order Successful")
        }, (error) =>{
          console.log(error);
        })
      }, (error) =>{
        alert("Adding Order UnSuccessful")
        console.log(error);
      })

     
    }
  }

  newOrder(){
      
  }

  


}
