import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-event-transportation',
  templateUrl: './event-transportation.component.html',
  styleUrls: ['./event-transportation.component.css']
})
export class EventTransportationComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.playlist = "";
  	this.transport = "";
  	this.driver = "";
  }

  ngOnInit(): void {
  }

  public playlist: string;
  public transport: string;
  public driver: string;

  //post request for transportation details
   onClickSubmit(mi : any): void {
      this.http.post<any>('/submitEventTransportation', {
        spotifyPlaylist:  mi.spotifyPlaylist,
        driverNeeded:  this.transport,
        driverName: mi.driverName
      })
        .subscribe((data)  => { console.log(data); }, (err) => {
          console.log("Error", err);
        });
  }

  setTransport(e: string): void {
//function to set the variable indicating if a driver is needed or not
    this.transport = e;
  }
}
