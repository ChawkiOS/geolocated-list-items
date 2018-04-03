import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any;

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider) {
    this.getCountries();
  }

  getCountries() {
    this.dataProvider.getCountries()
      .then(data => {
        this.countries = data;
        console.log(this.countries);
      });
  }

}
