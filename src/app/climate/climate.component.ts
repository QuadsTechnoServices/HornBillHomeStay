import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchClimateModal(): void {
    let el: HTMLElement = document.getElementById('launchClimate') as HTMLElement;
    el.click();
  }
}
