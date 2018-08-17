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
    new Destination('Miami', 'August 30', 'September 20', 674),
    new Destination('Santiago', 'August 28', 'September 15th', 985),
    new Destination('Mexico City', 'August 17', 'September 08', 400),
    new Destination('Bogota', 'August 30th', 'November 06', 285)
  ]
}
