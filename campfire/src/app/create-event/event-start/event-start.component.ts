import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-start',
  templateUrl: './event-start.component.html',
  styleUrls: ['./event-start.component.css']
})
export class EventStartComponent implements OnInit {

  constructor(private http: HttpClient) {
  	this.email = "";
  	this.eventname = "";
  	this.name = "";
  	this.friend = "";

   }

  ngOnInit(): void {
  }


   public email: string;
  public eventName: string;
  public name: string;
  public friend: string;



   //get request 
   onClickSubmit(mi : any): void {

       this.http.get<any>('/getTeam/' + mi.conf + '/' + mi.city + '/' + mi.win).subscribe((data) => {

      /*
       * This quickly gets tedious.
       * Use external libraries.
       */


      interface RandomObj {
        team: string;
      }

      let obj: RandomObj = JSON.parse(JSON.stringify(data));
      this.team = obj.team;

    })
   }
}
