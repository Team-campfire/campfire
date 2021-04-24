import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-viewer-dashboard',
  templateUrl: './viewer-dashboard.component.html',
  styleUrls: ['./viewer-dashboard.component.css']
})
export class ViewerDashboardComponent implements OnInit {

  desc = '';
  addy = '';
  oaddy = '';
  eventName = '';
  date = '';
  eventDesc = '';
  clubOrgDesc = '';

  constructor(private httpService: HttpService) {
    this.eventName = "Web Sci Demo";
    this.addy = "N/A";
    this.oaddy = "https://rensselaer.webex.com/meet/tralsa";
    this.date = "4/27/2021";
    this.desc = "This is a really cool event and you should join!"
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
