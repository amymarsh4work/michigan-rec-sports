import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {
  building: any;
  rooms: FirebaseListObservable<any[]>;

  constructor(public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.building = navParams.get('building');
  }

  ngOnInit() {
    this.rooms = this.firebaseProvider.getRoomData(this.building.id);
  }

  updateRoom(room) {
    let now = new Date();
    this.rooms.update(room.$key, { count: room.count, updated: now });
  }

}
