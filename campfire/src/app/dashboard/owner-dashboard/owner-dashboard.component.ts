import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  desc = '';
  addy = '';
  oaddy = '';
  eventName = '';
  date = '';

  constructor() {
    this.eventName = "Beach Volleyball";
    this.addy = "2 Discord Drive, Wilmington, Virginia";
    this.oaddy = "https://rensselaer.webex.com/meet/tralsa";
    this.date = "4/20/2021";
    this.desc = "Lit event!"
    // let btn = document.getElementById("coolbutton");
    // if (btn) {
    //   btn.addEventListener("click", (e:Event) => this.fillForm());
    // }
  }
  ngOnInit(): void {
  }

  // fillForm() {
  //    // button click handler
  //    this.eventName = "Beach Volleyball";
  //    this.addy = "2 discord drive, wilmington, virginia";
  //    this.oaddy = "https://rensselaer.webex.com/meet/tralsa";
  //    this.date = "5/3/21";
  //    this.desc = "Lit event!"
  // }
}
