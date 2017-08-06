import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  @ViewChild('titleElement')
  titleElement: ElementRef;

  title = 'Sky red';

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.titleElement.nativeElement.innerHTML);
  }

}
