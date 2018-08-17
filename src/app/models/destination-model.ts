export class Destination{
  public roundTrip: boolean = true;
  constructor(public location: string, public departure: string, public returning: string, public price: number){}
}
