import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from '../../services/leagues.service';
import 'rxjs/operator/map';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit, OnDestroy {
  league$;
  matches$;
  leagueCaption;
  matchday;
  standings;
  fixtures;
  showTable = true;
  private sub: any;

  constructor(private leaguesService: LeaguesService, private route: ActivatedRoute) {}

  // https://egghead.io/lessons/angular-2-controlling-rx-subscriptions-with-async-pipe-and-behaviorsubjects
  ngOnInit () {
    this.sub = this.route.params.subscribe((param: any) => {
      this.league$ = this.leaguesService.getTable(param.id);
      this.matches$ = this.leaguesService.getFixtures(param.id);
    });

    this.league$.subscribe(res => {
      this.leagueCaption = res.leagueCaption;
      this.matchday = res.matchday;
      this.standings = res.standing;
    });

    this.matches$.subscribe(res => {
      this.fixtures = res.fixtures;
      console.log(res);
    });
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }
}
