import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { BookingMenuComponent } from './booking-menu/booking-menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookFlightComponent,
    EditBookingComponent,
    BookingMenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
