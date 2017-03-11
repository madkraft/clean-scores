import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss']
})
export class FixturesComponent implements OnInit {
  @Input() matches;
  @Input() currMatchday;

  constructor() { }

  ngOnInit() {
  }

}
