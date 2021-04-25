import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
// declare var $: any;

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