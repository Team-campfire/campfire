import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
// declare var $: any;

@Component({
  selector: 'app-viewer-dashboard',
  templateUrl: './viewer-dashboard.component.html',
  styleUrls: ['./viewer-dashboard.component.css']
})

export class ViewerDashboardComponent implements OnInit {
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
    this.addy = "N/A";
    this.oaddy = "https://rensselaer.webex.com/meet/tralsa";
    this.date = "4/27/2021";
    this.time = "6:00 PM EDT"
    this.desc = "This is a really cool event and you should join!"
    this.eventDesc = "This is our final presentation"
    this.clubOrgDesc = "This is an amazing club"
    this.events = [];

    // let btn = document.getElementById("coolbutton");
    // if (btn) {
    //   btn.addEventListener("click", (e:Event) => this.fillForm());
    // }
  }
  ngOnInit(): void {

  this.http.get<any>('/getEvent').subscribe((data) => {
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
// $(document).ready(function () {
//   var counter = 0;
//   $("#addrow").on("click", function () {
//       var newRow = $("<tr>");
//       var cols = "";
//       cols += '<td><input type="text" class="form-control" name="number' + counter + '"/></td>';
//       cols += '<td><input type="text" class="form-control" name="activity' + counter + '"/></td>';
//       cols += '<td><input type="text" class="form-control" name="assignee' + counter + '"/></td>';
//       cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
//       newRow.append(cols);
//       $("table.order-list").append(newRow);
//       counter++;
//   });
//   // $("table.order-list").on("click", ".ibtnDel", function (event) {
//   //     $(this).closest("tr").remove();
//   //     counter -= 1
//   // });
// });