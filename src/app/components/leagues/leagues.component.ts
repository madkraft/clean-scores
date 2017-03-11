import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LeaguesService } from '../../services/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  leagues$;

  constructor(private leaguesService: LeaguesService) {}

  ngOnInit () {
    this.leagues$ = this.leaguesService.getLeagues();
  }
}
