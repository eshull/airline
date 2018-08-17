export class Destination{
  public roundTrip: boolean = true;
  constructor(public location: string, public departure: string, public arrival: string, public price: number){}
}
