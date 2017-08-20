import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  //templateUrl: 'app.html'
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  //rootPage: any = 'TabsPage';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private firebase: Firebase) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // save the token server-side and use it to push notifications to this device
      /*this.firebase.getToken()
          .then(token => console.log(`The token is ${token}`))
          .catch(error => console.error('Error getting token', error));

      this.firebase.onTokenRefresh()
          .subscribe((token: string) => console.log(`Got a new token ${token}`));*/
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
  }
}
