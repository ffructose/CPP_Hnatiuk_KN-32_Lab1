export abstract class Furniture {
  name!: string;
  value!: number;
  cost!: number;

  constructor(name: string, value: number) {
    if (value <= 0) throw new Error('value<=0');
    this.name = name;
    this.value = value;
  }
  abstract show(): any;
  abstract getCost(): any;

}
