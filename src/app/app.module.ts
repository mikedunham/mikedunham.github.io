import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { LocationPage } from '../pages/location/location';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation'
import { MapsProvider } from '../providers/maps/maps';
import { JsMapsProvider } from '../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../providers/native-maps/native-maps';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    LocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MapsProvider,
    JsMapsProvider,
    NativeMapsProvider,
    GoogleMaps,
    MapsProvider,
    JsMapsProvider,
    NativeMapsProvider
  ]
})
export class AppModule { }
