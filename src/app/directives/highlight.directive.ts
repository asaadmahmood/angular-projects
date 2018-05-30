import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[taHighlight]'
})
export class HighlightDirective {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {    
  }

   @HostListener('mouseenter')
   onMouseEnter() {
     this.setHighlightColor(this.highlightColor);
   }

   @HostListener('mouseleave')
   onMouseLeave() {
     this.setHighlightColor('');
   }

   setHighlightColor(color) {
    this.el.nativeElement.style.backgroundColor = color;    
   }

}
