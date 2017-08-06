import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('title')
  title: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.title.nativeElement.innerHTML);
  }

}
