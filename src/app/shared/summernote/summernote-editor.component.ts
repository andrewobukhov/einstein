import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {BaseComponent} from '../../common/base-component';
import {Subject} from 'rxjs';
import {CommonService} from '../../common/common-service';
declare let jQuery: any;

@Component({
  selector: 'app-summernote-editor',
  templateUrl: './summernote-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummernoteEditorComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input()
  public htmlContent: string;

  @Input()
  public editMode: boolean;

  @Input()
  public simpleMode: boolean;

  public config: any;

  private activeCssClass: string;

  private selectors: any;

  private editorEl: any;

  private textInput: any;

  constructor(protected ref: ChangeDetectorRef, private elementRef: ElementRef) {
    super(ref);
    this.editMode = false;
    this.selectors = {
      editorSelector: '.note-editor.note-frame',
      textInputSelector: '.note-editable',
      toolbarButtonSelector: 'button.note-btn',
      activeCssClass: 'smrnote-active'
    };
    this.activeCssClass = 'smrnote-active';
    this.config = {
      toolbar: [
        // [groupName, [list of button]]
        ['para', ['ul', 'ol']],
        ['table', ['table']],
        ['style', ['style']],
        ['font', ['bold', 'italic', 'underline']],
        ['color', ['color']],
        ['insert', ['link', 'picture', 'unlink']]
      ],
      height: 'auto'
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.editMode) {
      this.initSummernoteEditor();
    }
  }

  private onFocusEditor() {
    if (!this.editorEl.hasClass(this.activeCssClass)) {
      this.editorEl.addClass(this.activeCssClass);
    }
  }

  private onOutsideClick(event) {
    if (this.editorEl) {
      this.editorEl.removeClass(this.activeCssClass);
    }
  }

  public initEditMode() {
    this.editMode = true;
    setTimeout(() => {
      this.initSummernoteEditor();
      this.onFocusEditor();
    }, 200);
  }

  private initSummernoteEditor() {
    const element = jQuery(this.elementRef.nativeElement);
    this.editorEl = element.find(this.selectors.editorSelector);
    this.textInput = this.editorEl.find(this.selectors.textInputSelector);
    this.textInput.on('focus', () => this.onFocusEditor());
    this.addSubscriptionWithMarkChanges(CommonService.documentClick, (event: MouseEvent) => {
      if (!this.elementRef.nativeElement.contains(event.target) &&
        !jQuery(event.target).parents(this.selectors.toolbarButtonSelector).length) {
        this.onOutsideClick(event);
      }
    });
  }


  ngOnDestroy(): void {
    if (this.textInput) {
      try {
        this.textInput.off('focus');
      } catch (e) {
        console.log('Error: on summernote destroy', e);
      }
    }
    super.ngOnDestroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.simpleMode) {
      this.config.toolbar =  [];
    }
  }

}
