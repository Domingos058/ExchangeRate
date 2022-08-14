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
  rate$!: Observable<Rate[]>;
  rates!: Rate;
  teste1: any
  dtGridViewRateSelectedRow: any;

  dtGridViewRate: GridOptions = {
    columnDefs: [
      { headerName: 'Nome', field: 'base_code', sortable: true, filter: true }
    ],
    defaultColDef: {
      flex: 1,
      editable: false,
      resizable: true,
    }
  }
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
      console.log(data)
      // @ts-ignore
      this.rates = data
      console.log('teste', this.rates.rates)
      this.teste(this.rates.rates.name)
    });
  }

  teste(rates: any)
  {
    this.teste1= rates
      console.log(this.teste1)
  }
}
