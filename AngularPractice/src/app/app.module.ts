import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { dataBindingComponent } from './dataBinding/dataBinding.component';
import { NgModelComponent } from './ng-model/ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    dataBindingComponent,
    NgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
