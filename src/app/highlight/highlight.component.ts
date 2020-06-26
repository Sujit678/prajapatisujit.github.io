import {OnInit, ElementRef, HostListener, Input, Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') highlightColor: string;

  constructor(private elref: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mouseover')
  onMouse() {
    this.elref.nativeElement.style.backgroundColor = this.highlightColor || 'blue';
  }

  @HostListener('mouseleave')
  offMouse() {
    this.elref.nativeElement.style.backgroundColor = null;
  }

}
