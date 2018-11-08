import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('accomodation') accomodation;
  @ViewChild('climate') climate;
  @ViewChild('packages') packages;

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
