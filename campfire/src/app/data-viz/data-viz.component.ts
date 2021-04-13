import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-data-viz',
  templateUrl: './data-viz.component.html',
  styleUrls: ['./data-viz.component.css']
})
export class DataVizComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
  // constructor(private httpService: HttpService) {
  //     this.eventCategory = "";
  //   }

  //   ngOnInit(): void {
  //   }
  //   public eventCategory: string;

  //   public getEventCategory(): void {
  //     this.httpService.sendGetRequest('/event').subscribe((data) => {

  //       /*
  //        * This quickly gets tedious.
  //        * Use external libraries.
  //        */
  //       interface RandomObj {
  //         rnum: string;
  //       }

  //       let obj: RandomObj = JSON.parse(JSON.stringify(data));
  //       this.eventCategory = obj.rnum;
  //     })
  //   }
  // }
