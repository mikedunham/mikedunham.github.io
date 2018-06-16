import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from './../../providers/maps/maps';

@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})
export class LocationPage {

    location: {
        latitude: number,
        longitude: number
    };

    @ViewChild('map') mapElement: ElementRef;

    //https://alligator.io/ionic/navigating-passing-data-ionic/
    // https://baadiersydow.com/ionic-google-maps-geolocation-native-javascript-ios-android/

    constructor(public navCtrl: NavController, public navParams: NavParams, public mapsProvider: MapsProvider) {


        this.location = {
            latitude: this.navParams.get('latitude'),
            longitude: this.navParams.get('longitude')
        };

    }

    loadMap() {
        this.mapsProvider.init(this.location, this.mapElement);
    }

    ionViewDidLoad() {
        this.loadMap();
    }

}
