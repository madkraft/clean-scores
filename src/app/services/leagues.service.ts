import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaguesService {
  url: string;
  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('X-Auth-Token', '6361b22678c9489a837087e19ae65447');
    this.url = 'http://api.football-data.org/v1/competitions';
  }

  getLeagues () {
    return this.http.get(this.url, {headers: this.headers})
    // return this.http.get('./assets/mocks/competitions.json')
      .map(res => res.json());
  }

  getTable (id) {
    return this.http.get(`${this.url}/${id}/leagueTable`, {headers: this.headers})
    // return this.http.get('./assets/mocks/table.json')
      .map(res => res.json());
  }

  getFixtures (id) {
    return this.http.get(`${this.url}/${id}/fixtures`, {headers: this.headers})
    // return this.http.get('./assets/mocks/fixtures.json')
      .map(res => res.json());
  }
}


// http://api.football-data.org/v1/competitions
// http://api.football-data.org/v1/competitions/426/leagueTable
// http://api.football-data.org/v1/competitions/426/fixtures
