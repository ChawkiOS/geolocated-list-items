import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slider: Slides;

  countries: any = [];
  currentIndex = 0;

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider) {
    this.getCountries();
  }

  getCountries() {
    this.dataProvider.getCountries()
      .then(data => {
        this.countries = data;
      });
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
  }

}
