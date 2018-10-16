import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifyService } from 'mypushnotify/dist/notify.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
