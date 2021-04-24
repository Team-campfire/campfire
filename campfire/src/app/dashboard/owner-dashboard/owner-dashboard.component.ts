import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  // public desc: string;
  // public addy: string;
  // public oaddy: string;
  // public desc: string;
  // public eventName: string;
  // public date: string;
  desc = '';
  addy = '';
  oaddy = '';
  eventName = '';
  date = '';
  eventDesc = '';
  clubOrgDesc = '';

  constructor(private httpService: HttpService) {
    this.eventName = "Web Sci Demo";
    this.addy = "";
    this.oaddy = "";
    this.date = "4/27/2021";
    this.desc = ""
    this.eventDesc = "This is our final presentation"
    this.clubOrgDesc = "This is an amazing club"

    // let btn = document.getElementById("coolbutton");
    // if (btn) {
    //   btn.addEventListener("click", (e:Event) => this.fillForm());
    // }
  }
  ngOnInit(): void {
  }

  fillForm() {
    // button click handler
    this.eventName = "Web Sci Demo";
    this.addy = "N/A";
    this.oaddy = "https://rensselaer.webex.com/meet/tralsa";
    this.date = "4/27/2021";
    this.desc = "This is a really cool event and you should join!"
    this.eventDesc = "This is our final presentation"
    this.clubOrgDesc = "This is an amazing club"
  }
}
