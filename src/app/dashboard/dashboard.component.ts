import { Component, OnInit, ViewChild } from '@angular/core';
import { ROUTES } from './assets'
import { FOOD } from './foodslist'
import { Router } from "@angular/router";

import { ROUTECUSTOMER } from '../table-list/assets'

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

  constructor() { }
  
  ngOnInit(){
     this.water = ROUTES.filter(water => water);
     this.food = FOOD.filter(food => food);
     this.customer = ROUTECUSTOMER.filter(customer => customer);
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

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

