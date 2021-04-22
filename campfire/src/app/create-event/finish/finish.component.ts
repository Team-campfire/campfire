import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  public ecode: string;

  constructor(private httpService: HttpService) {
    this.ecode = "";
  }

  ngOnInit(): void {
    this.httpService.sendGetRequest('/submitEventCode').subscribe((data) => {

      interface EventObj {
        msg: string;
      }

      let obj: EventObj = JSON.parse(JSON.stringify(data));
      this.theHtmlString = obj.msg;
    })
    this.rcode = this.makeid(8);
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
}
