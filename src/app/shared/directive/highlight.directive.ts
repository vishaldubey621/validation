import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#0000FF', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#F3F3F3', 'black');
  }

  private highlight(color: string, fontColor: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = fontColor;
  }

}
