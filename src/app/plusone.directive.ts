import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[plusone]'
})
export class PlusoneDirective {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.html = this.el.nativeElement.innerHTML;
    console.dir(this.el.nativeElement);
  }

  // (click)="addCounter()"
  @HostListener('click', [''])
  addCounter() {
    var counter = +this.html;
    counter++;
    this.html = counter.toString();
  }

  // [innerHTML]="html"
  @HostBinding('innerHTML')
  html: string;

}
