import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Router } from "@angular/router";
import { ROUTECUSTOMER } from './assets'

import {StadiumService} from './stadium-service/stadium-service.service'

import { ROUTEINPROGRESS } from './inprogress'

import { ROUTESTADIUM } from './stadium-name-data'


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  customer: any[];
  customerinprogress: any[];
  stadium_name: any[];

  constructor(private _stadiumService:StadiumService) { }

 

  ngOnInit() {

    //  this.customer = ROUTECUSTOMER.filter(customer => customer);
    //  this.customerinprogress = ROUTEINPROGRESS.filter(customerinprogress => customerinprogress)
    //  this.stadium_name = ROUTESTADIUM.filter(stadium_name => stadium_name)

    this._stadiumService.getStadium().subscribe((stadium)=>{
      console.log(stadium);
      this.stadium_name = stadium;
    },(error)=>{
      console.log(error)
    })


  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
