import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTES } from './assets'
import { FOOD } from './foodslist'
import { Router } from "@angular/router";

import {Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { ROUTECUSTOMER } from '../table-list/assets'

import {FoodService} from '../dashboard/food_service/food.service'
import {DrinkService} from '../dashboard/drink_service/drink.service'
import {CustomerService} from '../dashboard/customer-service/customer.service'

import {Drink} from './assets/drink'


import {MatPaginator, MatTableDataSource} from '@angular/material';

declare var $:any;

import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  displayedColumns = ['position', 'name', 'weight', 'symbol'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  water: any[];
  food: any[];
  customer: any[];

  countDrink:String;
  countFood:String;
  coutCustomer:String;
  sumPrice:String;

  constructor(public dialog: MatDialog,private _foodService:FoodService, private _drinkService:DrinkService,
    private _customerService:CustomerService) {}
  
  ngOnInit(){
    //  this.water = ROUTES.filter(water => water);
    //  this.food = FOOD.filter(food => food);
    //  this.customer = ROUTECUSTOMER.filter(customer => customer);
     $.getScript('../../../assets/js/modal.js'); 
     this._foodService.getFood().subscribe((food)=>{
       console.log(food);
       this.food = food;
     },(error)=>{
       console.log(error)
     })

    this._drinkService.getDrink().subscribe((water)=>{
      console.log(water);
      this.water = water;
    },(error)=>{
      console.log(error)
    })

    this._customerService.getCustomerPaid().subscribe((customer)=>{
      console.log(customer);
      this.customer = customer;
    },(error)=>{
      console.log(error)
    })

    this.getCount()
    this.getSumPrice()
  }

  getCount(){
    this._customerService.getCount().subscribe((data)=>{
      this.coutCustomer = data;
    },(error)=>{
      console.log(error)
    })
  }

  getSumPrice(){
    this._customerService.getSumPrice().subscribe((data)=>{
      this.sumPrice = data;
    },(error)=>{
      console.log(error)
    })
  }

  deleteDrink(drink){
    this._drinkService.deleteDrink(drink.idDrink).subscribe((data)=>{
      this.water.splice(this.water.indexOf(drink),1);
    }, (error) =>{
      console.log(error)
    })
  }

  updateDrink(drink){
    this._drinkService.setterDrink(drink);
  }


  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "View more 10 products"

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }


 

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {

    food: any[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(){
  
     this.food = FOOD.filter(food => food);
     $.getScript('../../../assets/js/modal.js'); 
  }
}


