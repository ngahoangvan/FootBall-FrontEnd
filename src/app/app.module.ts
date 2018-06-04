import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {DatePipe} from '@angular/common';

import {DialogDataExampleDialog} from './dashboard/dashboard.component'



import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';

import{FoodService} from './dashboard/food_service/food.service'
import{DrinkService} from './dashboard/drink_service/drink.service'
import{CustomerService} from './dashboard/customer-service/customer.service'
import{StadiumService} from './table-list/stadium-service/stadium-service.service'

import {
  MatAutocompleteModule,

  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,



  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,



  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,

  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,

} from '@angular/material';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './table-list/table-list.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { FormComponent } from './form/form.component';
import { OrderService } from './form/order-service/order-service.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AppRoutingModule,

    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,

    MatIconModule,
    MatMenuModule,

    MatDialogModule,
    

    
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,

    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [DialogDataExampleDialog],
  declarations: [
    AppComponent,
    DashboardComponent,
    TableListComponent,
    MapsComponent,
    NotificationsComponent,
    FormComponent,
    DialogDataExampleDialog

  ],
  providers: [FoodService, DrinkService, CustomerService,StadiumService, OrderService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
