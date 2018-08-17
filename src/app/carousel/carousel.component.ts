import { Component, OnInit, Input, Output } from '@angular/core';
import  { Destination } from '../models/destination-model';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() childDestinationList: Destination;
  @Output() childSelectedDestination: Destination;

  destinationToShow = null;

  showDestination(clickedDestination){
  if(this.destinationToShow == clickedDestination){
    this.destinationToShow = null;
  } else {
    this.destinationToShow = clickedDestination;
  }
}
  constructor() { }

  ngOnInit() {
  }

}
