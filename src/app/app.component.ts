import { Component } from '@angular/core';
import  { Destination } from './models/destination-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airline';

  masterDestinationList: Destination[] = [

  ]
}
