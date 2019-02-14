import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appInternalScroll]'
})
export class InternalScrollDirective implements OnChanges {
  @Input() scrollAreaContainer: Element;
  @Input() internalScrollDisabled: boolean;

  constructor(private elementRef: ElementRef) {
    if (!this.internalScrollDisabled) {
      elementRef.nativeElement['onmousewheel'] = e => {
        this.onInternalScroll(e, this.scrollAreaContainer || elementRef.nativeElement);
      };
      elementRef.nativeElement['onwheel'] = e => {
        this.onInternalScroll(e, this.scrollAreaContainer || elementRef.nativeElement);
      };
    }
  }

  private onInternalScroll(e, element) {
    const delta = e.deltaY || e.detail || e.wheelDelta;

    if (delta < 0 && element.scrollTop === 0) {
      e.preventDefault();
      e.stopPropagation();
      e.returnValue = false;
      return;
    }

    if (delta > 0 && element.scrollHeight - element.clientHeight - element.scrollTop <= 1) {
      e.preventDefault();
      e.stopPropagation();
      e.returnValue = false;
      return;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.internalScrollDisabled && changes.internalScrollDisabled.currentValue !== changes.internalScrollDisabled.previousValue) {
      if (!changes.internalScrollDisabled.currentValue) {
        this.elementRef.nativeElement['onmousewheel'] = e => {
          this.onInternalScroll(e, this.scrollAreaContainer || this.elementRef.nativeElement);
        };
        this.elementRef.nativeElement['onwheel'] = e => {
          this.onInternalScroll(e, this.scrollAreaContainer || this.elementRef.nativeElement);
        };
      } else {
        this.elementRef.nativeElement['onwheel'] = undefined;
        this.elementRef.nativeElement['onmousewheel'] = undefined;
      }
    }
  }
}
