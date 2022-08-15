import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import {RateService} from 'src/app/core/services/rate.service';
import { Rate } from 'src/app/core/models/rate';

@Component({
  selector: 'app-show-rate',
  templateUrl: './show-rate.component.html',
  styleUrls: ['./show-rate.component.css']
})
export class ShowRateComponent implements OnInit {
  rate$!: Observable<any[]>;
  rates!: Rate;
  dtGridViewRateSelectedRow: any;


  //grid to displays currencys
  /*dtGridViewRate: GridOptions = {
    columnDefs: [
      { headerName: 'Nome', field: 'rates.rates', sortable: true, filter: true }
    ],
    defaultColDef: {
      flex: 1,
      editable: false,
      resizable: true,
    }
  }*/
  constructor(private rateService: RateService) {
  }

  // Events
  ngOnInit(): void {
    this.list();
  }

  // Properties
  list() {
    this.rate$ = this.rateService.list();
    this.rate$.subscribe(data=>{
      // @ts-ignore
      this.rates = data
      console.log('teste', this.rates.rates)
      //this.expand(this.rates.rates)
      });

    
      
  }

  //transforming the double object into an array to displays hes properties 
  expand(data: any): string[] {
    let stringArr: any[] = [];
    for (const prop in data) {
      data[prop] instanceof Object
        ? (stringArr = stringArr.concat([`${prop}: `]).concat(this.expand(data[prop])))
        : stringArr.push(`${prop}: ${data[prop]}`);
    }
    return stringArr;
  }

}



