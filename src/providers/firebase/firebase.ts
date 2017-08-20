import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

  constructor(public db: AngularFireDatabase) { }

  public getBuildingData() {
    return this.db.list('/buildings/');
  }

  public getRoomData(building) {
    return this.db.list('/rooms-' + building + '/');
  }

}
