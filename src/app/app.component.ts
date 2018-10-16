import { Component } from '@angular/core';
import { NotifyService } from 'mypushnotify/dist/notify.service';
import { SwPush } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _notificationService: NotifyService) {
    this._notificationService.requestPermission();
  }
  public notify():void {
    // tslint:disable-next-line:no-unused-expression
   
   console.log('sdgchg');
    const data: Array<any> = [];
    data.push({
      'title': 'Pop up notification',
      'alertContent': 'This is First Alert.',
      renotify:true
    });
    var count = 0;
    var notificationInterval = setInterval(() => {
      if (count < data.length) {
        this._notificationService.generateNotification([data[count]],((val)=>{
          console.log(val);}));
        count += 1;
      }
      else
        clearInterval(notificationInterval);
    }, 1000); }
  title = 'app';
}
