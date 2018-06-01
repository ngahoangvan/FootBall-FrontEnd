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
  
  ngOnInit(){
     this.water = ROUTES.filter(water => water);
     this.food = FOOD.filter(food => food);
     this.customer = ROUTECUSTOMER.filter(customer => customer);
     $.getScript('../../../assets/js/modal.js'); 
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


  constructor(public dialog: MatDialog) {}

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


