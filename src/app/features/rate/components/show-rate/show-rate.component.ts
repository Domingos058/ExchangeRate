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

  dtGridViewRate: GridOptions = {
    columnDefs: [
      { headerName: 'Nome', field: 'rates', sortable: true, filter: true }
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
      this.rates.rates
      console.log('teste', this.rates.rates)
      });
      
  }

}

