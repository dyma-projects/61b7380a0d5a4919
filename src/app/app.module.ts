import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Exercice2Component } from "./exercice2/exercice2.component";
import { Exercice1Component } from "./exercice1/exercice1.component";
import { Exxercice3Component } from './exxercice3/exxercice3.component';
import { Exercice4Component } from './exercice4/exercice4.component';

@NgModule({
  declarations: [AppComponent, Exercice2Component, Exercice1Component, Exxercice3Component, Exercice4Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
