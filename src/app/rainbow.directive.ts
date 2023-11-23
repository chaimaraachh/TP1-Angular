import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  colors: string[] = ['orchid', 'blue', 'red', 'green', 'orange', 'violet','yellow'];


  constructor() { }

  @HostBinding('style.color') 
  color:string='';
  @HostBinding('style.border-color') 
  borderColor: string='';

  @HostListener('keyup')
  changeColor(){
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.color = this.colors[randomIndex];
    this.borderColor = this.colors[randomIndex];
  }
}
