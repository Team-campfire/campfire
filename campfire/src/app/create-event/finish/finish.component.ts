import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  public ecode: string;
  public ocode: string;

  constructor(private http: HttpClient) {
    this.ecode = "";
    this.ocode = "";
  }

  ngOnInit(): void {

    this.ecode = this.makeid(8);
    this.ocode = this.makeid(8);

  }



  makeid(length: number): string {
    let result: string[] = [];
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&%$#@*^';
    let charactersLength: number = characters.length;
    for (let i: number = 0; i < length; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }




  //post request to post event code
  onClickSubmit(mi: any): void {


    this.http.post<any>('/submitEventCode',
      {
        eventCode: this.ecode,
        ownerCode: this.ocode
      })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {

          console.log("Error", err);

        }

      );
  }
}
