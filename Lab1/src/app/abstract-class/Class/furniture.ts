export abstract class Furniture {
  name!: string;
  cost!: number;

  constructor(){}
  abstract show(): any;
  abstract getCost(): any;

}
