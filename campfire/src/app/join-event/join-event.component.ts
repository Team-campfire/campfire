
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.css']
})

export class JoinEventComponent implements OnInit {



  constructor(private http: HttpClient, private router: Router) {
    this.code = "";

  }

  ngOnInit(): void {
  }

  public code: string;


  //post request for transportation details
  onClickSubmit(mi: any): void {
    this.router.navigate(['/viewerDashboard']);
    this.http.post<any>('/saveEventCode', {

      eventCode: mi.code
    })
      .subscribe((data) => { console.log(data); }, (err) => {
        console.log("Error", err);
      });
  }


}





