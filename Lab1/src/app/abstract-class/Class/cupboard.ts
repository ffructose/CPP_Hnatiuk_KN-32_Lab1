import { Furniture } from "./furniture";

export class Cupboard extends Furniture{
  constructor(
    override name:string,
    override value: number,
  ){
    super(name, value);
  }

  getCost(){
    this.cost = 75.0*this.value;
  }
  show(){
    return ("Name: " + this.name + "; V: " + this.value + "; Cost: " + this.cost + ";")
  }
}
