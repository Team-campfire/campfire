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

  constructor(private http: HttpClient) { 

  	// this.date = "";
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
      	if((r.eventCategories[0].eventCategory == this.eventCategory || this.eventCategory == "") && (r.eventCategories[0].clubCategory == this.clubCategory || this.clubCategory == "") /* 
      	&& (r.eventBasics[0].line || this.location == "" )*/) {
        this.events.push(r);

      	} 
      }
  })

}

    setCategory(e: string): void   
  {  
  //set event category

        this.eventCategory = e;  
        //this.display();
          
  }  
  

    setClub(e: string): void   
  {  

//set club category
        this.clubCategory = e;  
   //   this.display();

  }  

    setLocation(e: string): void   
  {  
  //set event category

        this.location = e;  
             //     this.display();

  }  
  
 // public date: string;
  public eventName: string;
  public eventDesc: string;
  public name: string;


  public clubCategory: string;
  public eventCategory: string;
  public location: string; //online or offline
  }