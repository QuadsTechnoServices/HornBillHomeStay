import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchAccomodationModal(): void {
    let el: HTMLElement = document.getElementById('launchAccomodation') as HTMLElement;
    el.click();
  }
}
