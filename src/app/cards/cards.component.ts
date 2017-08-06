import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: number = 0;
  action: string = '';
  action1: string = '';

  counter = 25;

  @ViewChild(BlockComponent)
  block: BlockComponent;

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

  ngAfterViewInit() {
    // this.block.title = '123';
  }

}
