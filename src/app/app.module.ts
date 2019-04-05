import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyloveComponent } from './mylove/mylove.component';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [
    AppComponent,
    MyloveComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
