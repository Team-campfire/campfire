import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.component.html',
  styleUrls: ['./event-categories.component.css']
})
export class EventCategoriesComponent implements OnInit {

  constructor(private http: HttpClient) { 
  this.eventCategory = "";
  	this.clubCategory = "";
  	this.eventDesc = "";
  	this.clubDesc = "";

  }

  ngOnInit(): void {
  }

  public eventCategory: string;
  public clubCategory: string;
  public eventDesc: string;
  public clubDesc: string;



    //post request for posting category details
   onClickSubmit(mi : any): void {


       this.http.post<any>('/submitCategories',
{
eventCategory:  this.eventCategory,
eventDescription:  mi.eventDescription,
clubCategory: this.clubCategory,
clubDescription:  mi.clubDescription
})
.subscribe(
(data)  => {
console.log(data);
},
(err) => {

console.log("Error", err);

}

);
    }


    setCategory(e: string): void   
  {  
  //set event category

        this.eventCategory = e;  
          
  }  
  

    setClub(e: string): void   
  {  
//set club category
        this.clubCategory = e;  
          
  }  


}
