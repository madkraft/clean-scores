import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { LeagueComponent } from './components/league/league.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: LeaguesComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'leagues/:id', component: LeagueComponent},
  {path: '**', component: FourOhFourComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);
