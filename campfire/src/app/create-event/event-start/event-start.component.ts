import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-event-start',
  templateUrl: './event-start.component.html',
  styleUrls: ['./event-start.component.css']
})
export class EventStartComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.email = "";
    this.eName = "";
    this.name = "";
    this.friend = "";

  }

  ngOnInit(): void {
  }

  public email: string;
  public eName: string;
  public name: string;
  public friend: string;

  //post request
  onClickSubmit(mi: any): void {

    this.http.post<any>('/submitEventStart',
      {
        yourEmailAddress: mi.yourEmailAddress,
        eventName: mi.eventName,
        yourName: mi.yourName,
        inviteFriends: mi.inviteFriends
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {

          console.log("Error", err);

        }

      );
  }


}
