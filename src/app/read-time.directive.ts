import {
  AfterContentInit,
  Directive,
  DoCheck,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective implements OnInit, OnChanges, AfterContentInit, DoCheck {
  @Output() time = new EventEmitter<number>();

  constructor(private el: ElementRef) {}
  ngDoCheck(): void {
   
  }
  ngAfterContentInit(): void {
    this.time.emit(this.getTime(this.el.nativeElement))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    
   
  }

  getTime(el: HTMLElement) {
    const text = el.textContent ?? ''
    let time = text.length / 200;
    if(time > 1) {
      return Math.round(time)
    } else {
      return 1
    }
  }
}
