import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  launchContactUsModal(): void {
    let el: HTMLElement = document.getElementById('launchContact') as HTMLElement;
    el.click();
  }
}
