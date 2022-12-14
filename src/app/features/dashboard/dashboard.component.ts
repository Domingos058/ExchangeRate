import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today = new Date();

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Dashboard");
  }

}
