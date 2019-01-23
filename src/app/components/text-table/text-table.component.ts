import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TestCasesData} from '../../test-data/test-cases-data';
import {CommonService} from '../../common/common-service';

declare let jQuery: any;

@Component({
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextTableComponent implements OnInit, AfterViewInit {
  public editModel: any;
  public model: any;
  public editMode: false;

  @ViewChild('areaElement') textArea;
  @ViewChild('actionArea') actionArea;

  constructor() {

  }

  ngOnInit() {
    this.model = TestCasesData.item2.children
      .sort((a, b) => a.order - b.order)
      .map(item => ({name: `!${this.replaceNewLines(item.name)}`, expectedResult: `!!${this.replaceNewLines(item.expectedResult)}`}));
    const title = `${this.replaceNewLines(TestCasesData.item2.name)}\r\n` +
      `${this.replaceNewLines(TestCasesData.item2.summary)}\r\n` +
      `${this.replaceNewLines(TestCasesData.item2.preconditions)}\r\n`;
    this.editModel = title + this.model.map(item => `${this.replaceNewLines(item.name)}\r\n${this.replaceNewLines(item.expectedResult)}`)
      .join('\r\n');
  }

  ngAfterViewInit(): void {
    const element = jQuery(this.textArea.nativeElement);
    element.css({'height': this.textArea.nativeElement.scrollHeight + 'px', padding: 0});

    this.textArea.nativeElement.addEventListener('keydown', () => {
      setTimeout(() => {
        element.css({'height': 'auto'});
        element.css({'height': this.textArea.nativeElement.scrollHeight + 'px', padding: 0});
      });
    });

    CommonService.splitterActivity.subscribe(() => {
      setTimeout(() => {
        element.css({'height': 'auto'});
        element.css({'height': this.textArea.nativeElement.scrollHeight + 'px', padding: 0});
      });
    });
  }

  countLineRow(line) {
    return Math.ceil(line.length / ((this.textArea ? this.textArea.nativeElement.scrollWidth : 1400) / 7.1725));
  }

  calcLinesRows() {
    let realLines = this.editModel.split('\n');

    return realLines = realLines.map(line => ({
      linesCount: this.countLineRow(line),
      line: line
    }));
  }

  getActionType(text) {
    if (text && (text.match(/^!!.*/g) || []).length) {
      return 'out';
    } else if (text && (text.match(/^!.*/g) || []).length) {
      return 'in';
    }
    return '';
  }


  replaceNewLines(text) {
    return text.replace(new RegExp('\r', 'mig'), '\\r')
      .replace(new RegExp('\t', 'mig'), '\\t')
      .replace(new RegExp('\n', 'mig'), '\\n');
  }


}
