import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Router } from "@angular/router";
import { ROUTECUSTOMER } from './assets'

import {StadiumService} from './stadium-service/stadium-service.service'

import { ROUTEINPROGRESS } from './inprogress'

import {Stadium} from './assets/stadium-name-data'
import {Customers } from './assets/customers';

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

  customer: Customers[];
  customerinprogress: any[];
  stadium: any[];

  constructor(private _stadiumService:StadiumService) { }

 

  ngOnInit() {

    //  this.customer = ROUTECUSTOMER.filter(customer => customer);
    //  this.customerinprogress = ROUTEINPROGRESS.filter(customerinprogress => customerinprogress)
    //  this.stadium_name = ROUTESTADIUM.filter(stadium_name => stadium_name)

    this._stadiumService.getStadium().subscribe((data)=>{
      this.stadium=data;
      console.log(data);
    },(error)=>{
      console.log(error)
    })


  }

}
