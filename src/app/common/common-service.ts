import {Subject} from 'rxjs';

export class CommonService {
  public static documentClick: Subject<any> = new Subject<any>();
}
