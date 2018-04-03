import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('slider') slider: Slides;
  @ViewChild('map') mapElement: ElementRef;
  
  countries: any = [];
  currentIndex = 0;
  map: any;
  marker: any;

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider) {

    this.getCountries();
  }

  ionViewDidLoad() {
    this.loadMap();
  }


  getCountries() {
    this.dataProvider.getCountries()
      .then(data => {
        this.countries = data;
        this.addMarker(this.countries[this.currentIndex].latlng);
      });
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
    this.moveMarker(this.countries[this.currentIndex].latlng);
  }

  loadMap() {
    let latLng = new google.maps.LatLng(33.0, 65.0);
    let mapOptions = {
      center: latLng,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
  }

  addMarker(latlng) {
    console.log(this.map.getCenter());
    
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(latlng[0], latlng[1])
    });

    this.map.setCenter(this.marker.getPosition());
  }

  moveMarker(latlng) {
    console.log(this.map.getCenter());
    this.marker.setPosition(new google.maps.LatLng(latlng[0], latlng[1]));
    this.map.setCenter(this.marker.getPosition());
  }
}
