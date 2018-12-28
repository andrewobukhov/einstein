import {Subscription} from 'rxjs';

export interface ISubscribe {
  subscribe(func: (value: any) => void): Subscription;
}
