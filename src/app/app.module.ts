import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CrashlyticsProvider } from '../providers/crashlytics/crashlytics';

const firebaseConfig = {
  apiKey: "AIzaSyD7O_jZcZBFKMIhPLZhXtse9ZKBAPe931M",
  authDomain: "michigan-mobile.firebaseapp.com",
  databaseURL: "https://michigan-mobile.firebaseio.com",
  projectId: "michigan-mobile",
  storageBucket: "michigan-mobile.appspot.com",
  messagingSenderId: "166278692431"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    CrashlyticsProvider
  ]
})
export class AppModule {}
