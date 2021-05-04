import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../http.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.component.html',
  styleUrls: ['./event-categories.component.css']
})
export class EventCategoriesComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  catgeoryForm = this.fb.group({
    eventDescription: [''],
    clubDescription: [''],
    eventCategories: this.fb.group({
      eventCategory: ['']
    }),
    clubCategories: this.fb.group({
      clubCategory: ['']
    })
    // aliases
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  onClickSubmit() {
    this.http.post<any>('/submitCategories', {
      eventCategory: this.catgeoryForm.value.eventCategories.eventCategory,
      eventDescription: this.catgeoryForm.value.eventDescription,
      clubCategory: this.catgeoryForm.value.clubCategories.clubCategory,
      clubDescription: this.catgeoryForm.value.clubDescription
    })
      .subscribe((data) => { console.log(data); }, (err) => {
        console.log("Error", err);
      });
  }

  // get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }
  //
  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

}

// sources for reactive forms:
// more documentation and work in typescript_to_node repository

// https://stackoverflow.com/questions/40367713/get-reference-to-currently-active-htmlelement
// https://stackoverflow.com/questions/43376081/angular2-retrieve-all-elements-with-class-name

// https://angular.io/guide/reactive-forms
// https://v2.angular.io/docs/ts/latest/guide/reactive-forms.html
// https://www.elite-corner.com/2018/11/angular-json-pipe-example.html
// https://stackoverflow.com/questions/43713558/how-to-get-a-single-value-from-formgroup

// https://stackoverflow.com/questions/44602420/angular2-4-populate-form-after-request
// https://angular.io/api/forms/FormGroup
// https://stackoverflow.com/questions/49078286/angular-5-reactive-forms-radio-button-group/49078441
// https://stackoverflow.com/questions/40647073/angular-2-accessing-data-from-formarray
// https://www.itsolutionstuff.com/post/angular-10-radio-button-reactive-form-exampleexample.html
// // https://stackoverflow.com/questions/39956579/angular2-reactive-forms-formcontrol-for-radio-buttons
// https://www.w3schools.com/jsref/met_console_warn.asp
// https://www.pluralsight.com/guides/how-to-submit-form-data-using-angular
// https://stackoverflow.com/questions/43800907/typescript-strictnullchecks-object-is-possibly-null
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
// https://www.tutorialspoint.com/expressjs/expressjs_form_data.htm
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
// https://stackoverflow.com/questions/16104078/appending-array-to-formdata-and-send-via-ajax
// https://angular.io/tutorial/toh-pt6
// https://stackoverflow.com/questions/34475523/how-to-pass-url-arguments-query-string-to-a-http-request-on-angular
// https://angular.io/guide/http#setup-for-server-communication

// https://stackoverflow.com/questions/47895748/json-data-is-not-showing-up
// https://stackoverflow.com/questions/44779067/json-data-not-showing-in-html/44779141
// https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
// https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
// https://stackoverflow.com/questions/26347394/node-js-with-express-bodyparser-unable-to-obtain-form-data-from-post-reques
// https://stackoverflow.com/questions/49642926/formgroup-get-vs-formgroup-controls-in-reactive-form-angular
// https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/
// https://stackoverflow.com/questions/51422528/how-to-submit-form-with-method-post-in-angular-2-using-formgroup
// https://angular.io/tutorial/toh-pt2#style-the-selected-hero
