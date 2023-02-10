import { Directive, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' // allow binding in element omitting [] in the element
})
export class BasicHighlightDirective implements OnInit{

  // custom prop binding
  @Input() defaultCol = 'transparent';
  @Input() highlightCol = 'pink';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultCol;

  /*
    elRef - reference to the element this directive is attached to

    the const inject the element where this directive sits on
  */
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = this.highlightCol;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = this.defaultCol;
  }

  // //host binding
  // @HostListener('mouseleave') mouseLeave(eventData: Event) {
  //   this.backgroundColor = this.defaultCol;
  // }

}
