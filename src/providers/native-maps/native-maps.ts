import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleMaps, LatLng, GoogleMapsEvent, GoogleMap } from '@ionic-native/google-maps';





/*
  Generated class for the NativeMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeMapsProvider {

  map: any;

  constructor(public googleMaps: GoogleMaps) {

  }

  init(location, element) {
    let latLng = new LatLng(location.latitude, location.longitude);

    let opts = {
      camera: {
        latLng: latLng,
        zoom: 11,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(element.nativeElement, opts);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  }

}
