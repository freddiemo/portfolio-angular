import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    // console.log('infoPage service ready');

    // read JSON file
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
        console.log('on data-page response: ', resp);
        console.log('twitter: ', resp['twitter']);
        console.log('twitter: ', resp['email']);
      });
  }
}
