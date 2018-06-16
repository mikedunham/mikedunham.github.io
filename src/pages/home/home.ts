import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationPage } from '../location/location';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  location: {
    latitude: number,
    longitude: number
  };


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  getLocation(){
    let options = {
      enableHighAccuracy: true,
      timeout: 25000
    };
 
 
    this.geolocation.getCurrentPosition(options).then((position) => {
 
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      console.log('Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude);

      this.navCtrl.push(LocationPage, this.location);
 
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
