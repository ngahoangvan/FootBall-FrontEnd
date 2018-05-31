import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';

import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Router } from "@angular/router";
import { ROUTECUSTOMER } from './assets'

import { ROUTEINPROGRESS } from './inprogress'


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

  constructor() { }

  customer: any[];
  customerinprogress: any[];

  ngOnInit() {

     this.customer = ROUTECUSTOMER.filter(customer => customer);
     this.customerinprogress = ROUTEINPROGRESS.filter(customerinprogress => customerinprogress)
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
