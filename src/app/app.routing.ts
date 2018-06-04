import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './table-list/table-list.component';
import { FormComponent } from './form/form.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },

    { path: 'state-stadium',     component: TableListComponent },

    { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    { path: 'form',  component: FormComponent },

    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
