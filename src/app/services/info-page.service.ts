import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: any = {};
  loaded = false;

  constructor( private http: HttpClient ) {

    // console.log('infoPage service ready');

    // read JSON file
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: any) => {
        this.loaded = true;
        this.info = resp;
        console.log('on data-page response: ', resp);
        console.log('twitter: ', resp['twitter']);
        console.log('twitter: ', resp['email']);
      });
  }
}
