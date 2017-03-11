import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  @Input() teams;

  constructor() { }

  ngOnInit() {
  }

}
