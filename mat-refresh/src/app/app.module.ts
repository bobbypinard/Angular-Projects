import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

//User generated components
import { CardComponent } from './card/card.component';
import { BadgesComponent } from './badges/badges.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BadgesComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
