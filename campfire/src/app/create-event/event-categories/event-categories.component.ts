import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl } from '@angular/forms';  

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
    //
    this.theHtmlString = "";
  }

  ngOnInit(): void {
    // this.theHtmlString = "egg";
  }

  public eventCategory: string;
  public clubCategory: string;
  public eventDesc: string;
  public clubDesc: string;
  //
  public theHtmlString: string;

  //post request for posting category details
  setCategory(e: string): void {
  //set event category
    this.theHtmlString = "egg";
    this.eventCategory = e;
  }

  setClub(e: string): void {
    //set club category
    this.clubCategory = e;
  }

  onClickSubmit(mi : any): void {
    this.http.post<any>('/submitCategories', {
      eventCategory:  this.eventCategory,
      eventDescription:  mi.eventDescription,
      clubCategory: this.clubCategory,
      clubDescription:  mi.clubDescription
    })
    .subscribe((data)  => { console.log(data); }, (err) => {
      console.log("Error", err);
    });
  }

  // src:
  // https://stackoverflow.com/questions/49014689/http-post-request-with-typescript
  // https://docs.angularjs.org/api/ng/input/input%5Bradio%5D
  // https://www.concretepage.com/angular-2/angular-2-radio-button-and-checkbox-example
  // https://stackoverflow.com/questions/52927608/how-get-checked-value-from-radio-button-angular
  // https://stackoverflow.com/questions/49078286/angular-5-reactive-forms-radio-button-group/49078441
  // https://angular.io/api/forms/RadioControlValueAccessor
}
