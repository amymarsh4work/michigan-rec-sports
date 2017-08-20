import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var fabric: any;

@Injectable()
export class CrashlyticsProvider {

  constructor(public http: Http) {
    console.log('Hello CrashlyticsProvider Provider');
  }

  log(message) {
    console.log('crash message: ', message);
    fabric.Crashlytics.addLog("about to send a crash for testing!");
    fabric.Crashlytics.sendCrash();
    //fabric.Crashlytics.addLog(message);
  }

}
