import {Component, OnInit} from '@angular/core';
import { initDashboard } from './init-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
      $(initDashboard);
  }
}
