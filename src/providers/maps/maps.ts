import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { JsMapsProvider } from './../js-maps/js-maps';
import { NativeMapsProvider } from './../native-maps/native-maps';
import { GoogleMaps } from '@ionic-native/google-maps';


/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapsProvider {

  map: any;

  constructor(public platform: Platform) {
    if (this.platform.is('cordova') &&
      (this.platform.is('ios') || this.platform.is('android'))) {
      this.map = new NativeMapsProvider(GoogleMaps);
    } else {
      this.map = new JsMapsProvider();
    }
  }

  init(location, element) {
    this.map.init(location, element);
  }

}