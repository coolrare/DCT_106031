import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: number = 0;
  action: string = '';
  action1: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.action = params['action'];
    });

    this.route.queryParams.subscribe(params => {
      this.action1 = params['action1'];
    });
  }

}
