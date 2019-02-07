import {Subject} from 'rxjs';

export class CommonService {
  public static documentClick: Subject<any> = new Subject<any>();
  public static leftSideBarState: Subject<any> = new Subject<any>();

  public static splitterActivityDelta: Subject<any> = new Subject<any>();
  public static splitterActivityStart: Subject<any> = new Subject<any>();
}
