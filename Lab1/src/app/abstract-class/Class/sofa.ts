import { Furniture } from "./furniture";

export class Sofa extends Furniture{
  constructor(
    override name:string,
    override value: number){
    super(name, value);
  }

  getCost(){
    this.cost = (this.value*this.value)/3 + 5000;
  }
  show(){
    return ("Name: " + this.name + "; S: " + this.value + "; Cost: " + this.cost + ";")
  }

}

