import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateRoutingModule } from './rate-routing.module';
import { RateComponent } from './rate.component';
import { ShowRateComponent } from './components/show-rate/show-rate.component';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RateComponent,
    ShowRateComponent
  ],
  imports: [
    CommonModule,
    RateRoutingModule,
    SharedModule,
    AgGridModule,
    ReactiveFormsModule
  ]
})
export class RateModule { }
