import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appArcEnCiel]',
  standalone: true,
})
export class ArcEnCielDirective {
  @HostBinding('style.color') textColor: string = '#FF5733';
  @HostBinding('style.borderColor') borderColor: string = '#FF5733';

  private colors: string[] = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F333FF',
    '#33FFF5',
    '#FFBD33',
    '#FF33A8',
  ];

  constructor() {}

  @HostListener('keyup') onKeyUp() {
    const randomColor =
      this.colors[Math.floor(Math.random() * this.colors.length)];
    this.textColor = randomColor;
    this.borderColor = randomColor;
  }
}
