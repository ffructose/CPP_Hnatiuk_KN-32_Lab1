import { Furniture } from "./furniture";

export class Sofa extends Furniture{
  constructor(
    override name:string,
    public area: number){
    super();
  }

  getCost(){
    this.cost = (this.area*this.area)/3 + 5000;
  }
  show(){
    return ("Name: " + this.name + "; S: " + this.area + "; Cost: " + this.cost + ";")
  }

}

