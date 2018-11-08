import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('aboutUs') aboutUs;
  @ViewChild('locateUs') locate;
  @ViewChild('contactUs') contactUs;
  title = 'HornBill';
  today = new Date().getFullYear();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  gotToHome() {
    this.router.navigate(['/home']);
  }
}
