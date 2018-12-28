import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {filter, share} from 'rxjs/operators';
import {ISubscribe} from './i-subscribe';

export class BaseComponent implements OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(protected ref: ChangeDetectorRef) {
  }

  protected addSubscriptionWithMarkChanges(provider: ISubscribe | Observable<any>, func: (value: any) => void) {
    this.subscriptions.push(provider.subscribe((x: any) => {
      func(x);
      this.ref.markForCheck();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
