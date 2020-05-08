import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { YoutubeVidComponent } from './youtube-vid/youtube-vid.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardsComponent,
    YoutubeVidComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
