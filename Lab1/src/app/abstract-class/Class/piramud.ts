import { Figure3D } from "./figure3D";

export class Piramid extends Figure3D{
  constructor(override naz:string, override h:number, public parametr:number){
    super();
  }

  S(){
    let s4, s0;
    s4=0.5*this.parametr*this.h;
    s0=this.parametr*this.parametr;
    this.pl=4*s4+s0;
  }
}

