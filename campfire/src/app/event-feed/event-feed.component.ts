import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.css']
})

export class EventFeedComponent implements OnInit {

  events: Array<any>;
  public eventName: string;
  public eventDesc: string;
  public name: string;

  public clubCategory: string;
  public eventCategory: string;
  public location: string; //online or offline

  constructor(private http: HttpClient) {
  	this.eventName = "";
  	this.eventDesc = "";
  	this.name = "";
  	this.events = [];
  	this.clubCategory = "";
  	this.eventCategory = "";
  	this.location = ""; //online or offline
  }

  ngOnInit(): void {
    this.http.get<any>('/getEvents').subscribe((data) => {
      //filtering work in progress
      for(let r of data) {
      /*
      	if((r.eventCategories[0].eventCategory == "gbm" || this.eventCategory == "") && (r.eventCategories[0].clubCategory == "athletic" || this.clubCategory == "")
      	&& (r.eventBasics[0].line || this.location == "" )) {
        this.events.push(r);
      	} */
      	this.events.push(r);
      }
    })
  }

  display(): void {
    this.http.get<any>('/getEvents').subscribe((data) => {
      for(let r of data) {
      	// if((r.eventCategories[0].eventCategory == this.eventCategory || this.eventCategory == "") && (r.eventCategories[0].clubCategory == this.clubCategory || this.clubCategory == "")
        // /* && (r.eventBasics[0].line || this.location == "" )*/) {
        // this.events.push(r);
        //
      	// }
        this.events.push(r);
      }
    })
  }

  setCategory(e: string): void {
  //set event category
    this.eventCategory = e;
    //this.display();
  }


  setClub(e: string): void {
  //set club category
    this.clubCategory = e;
   // this.display();
  }

  setLocation(e: string): void {
  //set event category
    this.location = e;
    //     this.display();
  }

  eventsByClub(e: string): void {
    // alert(this.clubCategory = e);
    // alert("egg");

    this.clubCategory = e;
    this.events.length = 0;

    this.http.get<any>('/getEvents').subscribe((data) => {
      for(let r of data) {
      	if(r.eventCategories[0].clubCategory == this.clubCategory || this.clubCategory == "") {
        /* && (r.eventBasics[0].line || this.location == "" )*/
          this.events.push(r);
      	}
        // this.events.push(r);
      }
    })
  }

  identify(index: any, item: any){
     return item.name;
  }
}

// sources:
// https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
// https://angular.io/guide/user-input
// https://stackoverflow.com/questions/53203224/my-view-does-not-update-when-i-change-my-array-in-ngfor/53203848
// https://stackoverflow.com/questions/45239739/angular2-ngfor-does-not-update-when-array-is-updated
