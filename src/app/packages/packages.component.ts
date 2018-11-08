import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchPackagesModal(): void {
    let el: HTMLElement = document.getElementById('launchPackages') as HTMLElement;
    el.click();
  }
}
