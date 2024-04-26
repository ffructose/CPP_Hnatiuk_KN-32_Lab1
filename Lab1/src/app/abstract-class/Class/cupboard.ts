import { Furniture } from "./furniture";

export class Cupboard extends Furniture{
  constructor(
    override name:string,
    public volume: number){
    super();
  }

  getCost(){
    this.cost = 75.0*this.volume;
  }
  show(){
    return ("Name: " + this.name + "; V: " + this.volume + "; Cost: " + this.cost + ";")
  }
}
