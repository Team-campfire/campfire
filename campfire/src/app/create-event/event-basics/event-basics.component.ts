import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-event-basics',
  templateUrl: './event-basics.component.html',
  styleUrls: ['./event-basics.component.css']
})
export class EventBasicsComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.privacy = "";
    this.date = "";
    this.time = "";
    this.line = "";
  }

  ngOnInit(): void {
  }

  public privacy: string;
  public date: string;
  public time: string;
  public line: string;

  //post request for transportation details
  onClickSubmit(mi: any): void {
    this.http.post<any>('/submitEventBasics', {
      radioButtonPublic: this.privacy,
      date: mi.date,
      time: mi.time,
      radioButtonOnOff: this.line
    })
      .subscribe((data) => { console.log(data); }, (err) => {
        console.log("Error", err);
      });
  }

  setPrivacy(e: string): void {
    //function to set the variable indicating if event is public or not
    this.privacy = e;
  }

  setLine(e: string): void {
    //function to set the variable indicating if event is online or not
    this.line = e;
  }

}
