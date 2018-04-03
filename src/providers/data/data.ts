import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  baseUrl: string = 'https://restcountries.eu/rest/v2';
  
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getCountries() {
    return new Promise(resolve => {
      this.http.get(this.baseUrl + '/all').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
