import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  title: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

}
