import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import appRoutes from './app.routes';

import { LeaguesService } from './services/leagues.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { LeagueComponent } from './components/league/league.component';
import { StandingsComponent } from './components/standings/standings.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaguesComponent,
    LeagueComponent,
    StandingsComponent,
    FixturesComponent,
    FourOhFourComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [LeaguesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
