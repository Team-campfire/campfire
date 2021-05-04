import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    events: Array<any>;

  desc = '';
  addy = '';
  oaddy = '';
  eventName = '';
  date = '';
  time = '';
  eventDesc = '';
  clubOrgDesc = '';

  constructor(private http: HttpClient) {
    this.eventName = "Web Sci Demo";
    this.addy = "";
    this.oaddy = "";
    this.date = "4/27/2021";
    this.time = "6:00 PM EDT";
    this.desc = "";
    this.eventDesc = "This is our final presentation";
    this.clubOrgDesc = "This is an amazing club";
    this.events = []

    // let btn = document.getElementById("coolbutton");
    // if (btn) {
    //   btn.addEventListener("click", (e:Event) => this.fillForm());
    // }
  }
  ngOnInit(): void {
  
  this.http.get<any>('/getLatestEvent').subscribe((data) => {
//filtering work in progress
      for(let r of data) {
      /*
        if((r.eventCategories[0].eventCategory == "gbm" || this.eventCategory == "") && (r.eventCategories[0].clubCategory == "athletic" || this.clubCategory == "") 
        && (r.eventBasics[0].line || this.location == "" )) {
        this.events.push(r);
        } */
        this.events.push(r);
      }
      this.date = this.events[0].eventBasics[0].date;
      this.time = this.events[0].eventBasics[0].time;
      this.eventDesc = this.events[0].eventCategories[0].eventDescription;
      this.clubOrgDesc = this.events[0].eventCategories[0].clubDescription;


  })
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
