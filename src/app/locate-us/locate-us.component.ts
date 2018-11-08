import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-locate-us',
  templateUrl: './locate-us.component.html',
  styleUrls: ['./locate-us.component.scss']
})
export class LocateUsComponent implements OnInit {
  lat: number = 15.361683;
  lng: number = 74.338158;
  mapsUrl = 'https://maps.google.com/?q=Hornbill+Homestay+Ghotga%2C+Karnataka+581186&ftid=0x0:0x36332cb0d1dcfe40&hl=en&gl=us';

  constructor() { }

  ngOnInit() {
  }

  launchLocationModal(): void {
    let el: HTMLElement = document.getElementById('launchLocation') as HTMLElement;
    el.click();
  }

  openGoogleMaps(){
    window.open(this.mapsUrl, '_blank');
  }
}
