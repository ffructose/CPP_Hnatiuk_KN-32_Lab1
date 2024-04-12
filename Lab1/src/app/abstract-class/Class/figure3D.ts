export abstract class Figure3D {
  naz!: string;
  h!: number;
  pl!: number;
  parameter !: number;
  constructor(){}
  show(){
    return "Name=" + this.naz + " " + "Height=" + this.h.toFixed(2) + " Area=" + this.pl.toFixed(2);

  }
  abstract S(): any;

}
