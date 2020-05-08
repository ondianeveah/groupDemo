import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { AddHeaderComponentComponent } from './add-header-component/add-header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardsComponent,
    AddHeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
