import { Figure3D } from "./figure3D";

export class Conus extends Figure3D{
  constructor(override naz:string, override h:number, public parametr:number){
    super();
  }

  S(){
    let l;
    l = Math.sqrt(this.parametr*this.parametr+this.h*this.h);
    this.pl=Math.PI*this.parametr*l;
  }
}
