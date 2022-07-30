import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlights]',
})
export class HighlightsDirective implements OnChanges {
  @Input('appHighlights') searchText: string = '';

  originText: string = '';

  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnChanges(changes: SimpleChanges): void {
    const { firstChange, currentValue } = changes['searchText'];
    if (firstChange) {
      this.originText = this.el.nativeElement.innerHTML;
      return;
    } else if (currentValue !== '') {
      this.el.nativeElement.innerHTML = this.originText;
      const regExp = new RegExp(`${currentValue}`, 'gi');
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(
        regExp,
        `<span class="bg-yellow-300">$&</span>`
      );
      return;
    } else {
      this.el.nativeElement.innerHTML = this.originText;
      return;
    }
    
  }
}
