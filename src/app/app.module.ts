import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddHeaderComponentComponent } from './add-header-component/add-header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddHeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
