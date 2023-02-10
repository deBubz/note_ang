import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective {
  constructor(private elRef : ElementRef) {}
  @HostBinding('class.open') visible :boolean = false;

  // @HostListener('click') click() {
    // this.visible = !this.visible;
  // }

  // Max Method is the same

  // to close dropdown from anywhere
  @HostListener('document:click', ['$event']) toggleOpen(e: Event) {
    this.visible = this.elRef
      .nativeElement
      .contains(e.target) ? !this.visible : false;
  }
}
