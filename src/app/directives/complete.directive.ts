import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appComplete]'
})
export class CompleteDirective {

  constructor() { }

  @HostBinding('class.is-complete') isComplete = true;

  @HostBinding('class.item-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter(){
  	this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
  	this.hovering = false;
  }

  @Input() set appComplete(v){
  	  this.isComplete = v;
  }
}