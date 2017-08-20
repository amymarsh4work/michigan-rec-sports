import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

import { CrashlyticsProvider } from './../../providers/crashlytics/crashlytics';

import { ListPage } from "../../pages/list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  buildings: FirebaseListObservable<any[]>;
  rooms: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, private crashlyticsProvider: CrashlyticsProvider) {
    this.buildings = this.firebaseProvider.getBuildingData();
  }

  openRoomList(building) {
    console.debug('building:', building);
    this.navCtrl.push(ListPage, {"building": building});
  }

  updateRoom(room) {
    console.log('room:', room);
    this.rooms.update(room.$key, {count: room.count});
  }

  testCrash() {
    this.crashlyticsProvider.log('helloHomePage');
  }

}
