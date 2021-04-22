import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  team: any[] = [];

  constructor( private http: HttpClient ) {
    // console.log('infoPage service ready');
    this.loadInfo();
    this.loadTeams();
  }

  private loadInfo() {
    // read JSON file
    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {
        this.loaded = true;
        this.info = resp;
      });
  }

  private loadTeams() {
    this.http.get('https://angular-html-54507-default-rtdb.firebaseio.com/team.json')
      .subscribe( (resp: any) => {

        this.team = resp;
        console.log(resp);

      });
  }

}
