import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchAboutUsModal(): void {
    let el: HTMLElement = document.getElementById('launchAbout') as HTMLElement;
    el.click();
  }
}
