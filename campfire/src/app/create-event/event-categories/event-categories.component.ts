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

  catgeoryForm = this.fb.group({
    eventDescription: [''],
    clubDescription: [''],
    eventCategories: this.fb.group({
      eventCategory: ['']
    }),
    clubCategories: this.fb.group({
      clubCategory: ['']
    }),
    // aliases
    // aliases: this.fb.array([
    //   this.fb.control('')
    // ])
  });

  profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  }),
  colors: this.fb.group({
    color: ['']
  }),
  // aliases
  aliases: this.fb.array([
    this.fb.control('')
  ])
});

get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

addAlias() {
  this.aliases.push(this.fb.control(''));
}

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // this.eventCategory = "";
    // this.clubCategory = "";
    // this.eventDesc = "";
    // this.clubDesc = "";
  }

  ngOnInit(): void {
  }

  // public eventCategory: string;
  // public clubCategory: string;
  // public eventDesc: string;
  // public clubDesc: string;



  //post request for posting category details
  // onClickSubmit(mi: any): void {
  //
  //
  //   this.http.post<any>('/submitCategories',
  //     {
  //       eventCategory: this.eventCategory,
  //       eventDescription: mi.eventDescription,
  //       clubCategory: this.clubCategory,
  //       clubDescription: mi.clubDescription
  //     })
  //     .subscribe(
  //       (data) => {
  //         console.log(data);
  //       },
  //       (err) => {
  //
  //         console.log("Error", err);
  //
  //       }
  //
  //     );
  // }

  onClickSubmit() {
    // TODO: Use EventEmitter with form value
    // alert(this.profileForm.value.colors.color);
    // alert(this.profileForm.get('firstName')!.value);
    // alert(this.profileForm.firstName.value);

    // alert(formData.getAll('name'));

    this.http.post<any>('/submitCategories', {
      // myfirstname:  this.profileForm.value.firstName,
      // colorchoice:  this.profileForm.value.colors.color,

      eventCategory: this.catgeoryForm.value.eventCategories.eventCategory,
      eventDescription: this.catgeoryForm.value.eventDescription,
      clubCategory: this.catgeoryForm.value.clubCategories.clubCategory,
      clubDescription: this.catgeoryForm.value.clubDescription

      // eventCategory: this.eventCategory,
      // eventDescription: mi.eventDescription,
      // clubCategory: this.clubCategory,
      // clubDescription: mi.clubDescription
    })
    .subscribe((data)  => { console.log(data); }, (err) => {
      console.log("Error", err);
    });
  }

  onSubmit1() {
    // TODO: Use EventEmitter with form value
    alert(this.profileForm.value.colors.color);
    // alert(this.profileForm.get('firstName')!.value);
    // alert(this.profileForm.firstName.value);
    // console.warn(this.profileForm.value);

    // let formData: any = new FormData();
    // this.fname = this.profileForm.value.firstName;
    // formData.append("name", this.profileForm.get('firstName')!.value);
    // alert(formData.getAll('name'));

    // this.http.post<any>('/submitCategories', {
    //
    //   myfirstname:  this.profileForm.value.firstName,
    //   colorchoice:  this.profileForm.value.colors.color
    //
    //   // fname: this.fname
    //   // eventCategory:  this.eventCategory,
    //   // eventDescription:  mi.eventDescription,
    //   // clubCategory: this.clubCategory,
    //   // clubDescription:  mi.clubDescription
    // })
    // .subscribe((data)  => { console.log(data); }, (err) => {
    //   console.log("Error", err);
    // });
  }

}
