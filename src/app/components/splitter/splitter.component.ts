import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CommonService} from '../../common/common-service';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent implements AfterViewInit {
  @ViewChild('firstArea') firstArea: any;
  @ViewChild('secondArea') secondArea: any;
  @ViewChild('splitter') splitter: any;
  @Input() direction = 'horizontal';
  @Input() leftAreaClosed: boolean;
  @Output() leftAreaClosedChange = new EventEmitter();

  private last_x: number;
  private window_width: number;
  private window_half_width: number;
  public isInProgress = false;
  private leftBound = 400;
  private gutterSize = 18;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.window_width = this.elementRef.nativeElement.clientWidth;
    this.window_half_width = Math.ceil(this.window_width / 2);

    let dx = this.leftBound;
    this.firstArea.nativeElement.style.minWidth = dx + 'px';
     this.splitter.nativeElement.style.marginLeft = dx + 'px';
    this.secondArea.nativeElement.style.marginLeft = this.gutterSize + 'px';

    // dx = this.window_width - dx - this.gutterSize;
    // this.secondArea.nativeElement.style.width = dx + 'px';
    this.splitter.nativeElement.addEventListener('mousedown', this.spMouseDown);
  }

  spMouseDown = e => {
    this.splitter.nativeElement.removeEventListener('mousedown', this.spMouseDown);
    this.last_x = e.clientX;
    window.addEventListener('mousemove', this.spMouseMove);
    window.addEventListener('mouseup', this.spMouseUp);
  };

  spMouseUp = e => {
    this.isInProgress = false;
    window.removeEventListener('mousemove', this.spMouseMove);
    window.removeEventListener('mouseup', this.spMouseUp);
    this.splitter.nativeElement.addEventListener('mousedown', this.spMouseDown);
    this.resetPosition(this.last_x);
  };

  spMouseMove = (e) => {
    this.isInProgress = true;
    this.resetPosition(e.clientX);
    CommonService.splitterActivity.next(e.clientX);
  };

  resetPosition = (nowX: number) => {
    let dx = nowX - this.last_x;

    dx += this.firstArea.nativeElement.clientWidth;

    if (dx < this.leftBound) {
      dx = this.leftBound;
      this.last_x = dx;
      return;
    } else if (dx > this.window_half_width) {
      dx = this.window_half_width;
      this.last_x = dx;
      return;
    }

    this.firstArea.nativeElement.style.minWidth = dx + 'px';
    this.splitter.nativeElement.style.marginLeft = dx + 'px';

    // dx = this.window_width - dx  - this.gutterSize;
    // this.secondArea.nativeElement.style.width = dx + 'px';

    this.last_x = nowX;
  };

  closeLeftArea() {
    let dx = 0;
    this.firstArea.nativeElement.style.width = dx + 'px';
    this.splitter.nativeElement.style.marginLeft = dx + 'px';

    dx = this.window_width - dx;
    this.secondArea.nativeElement.style.width = dx + 'px';
  }

  onToggle() {
    if (this.isInProgress) {
      return;
    }
    this.leftAreaClosed = !this.leftAreaClosed;
    this.leftAreaClosedChange.emit(this.leftAreaClosed);

    if (this.leftAreaClosed) {
      this.closeLeftArea();
    } else {
      this.resetPosition(this.leftBound + this.last_x);
    }
    CommonService.splitterActivity.next(0);
  }

  @HostListener('window:resize', [])
  onResize() {
    this.window_width = this.elementRef.nativeElement.clientWidth;
    this.window_half_width = Math.ceil(this.window_width / 2);

    let dx = this.firstArea.nativeElement.clientWidth;
    if (dx > this.window_half_width) {
      dx = this.window_half_width;
      this.last_x = dx;
      this.firstArea.nativeElement.style.minWidth = dx + 'px';
    }

    this.splitter.nativeElement.style.marginLeft = dx + 'px';
  }
}
