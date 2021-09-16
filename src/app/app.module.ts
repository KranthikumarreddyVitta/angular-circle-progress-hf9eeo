import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
    NgCircleProgressModule.forRoot({})],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
