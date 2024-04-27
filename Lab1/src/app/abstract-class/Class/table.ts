import { Furniture } from "./furniture";

export class Table extends Furniture{
  constructor(
    override name:string,
    override value: number){
    super(name, value);
  }

  getCost(){
    this.cost = 24*this.value+980;
  }
  show(){
    return ("Name: " + this.name + "; S: " + this.value + "; Cost: " + this.cost + ";")
  }
}
