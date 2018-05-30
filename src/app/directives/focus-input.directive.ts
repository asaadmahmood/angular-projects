import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[taFocusInput]'
})
export class FocusInputDirective {

  constructor(private el: ElementRef) {     
    setTimeout(() => {
      this.el.nativeElement.focus();
    });
  }

  setFocus() {
    
  }

}
