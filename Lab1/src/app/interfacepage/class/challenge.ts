import { iShow } from "../interface/iShow";

export class Challenge implements iShow {
  type!: string;
  place!: string;

  constructor(type: string, place: string) {
    this.type = type;
    this.place = place;
  }

  getRules() {
    return "той хто не пройде випробування, піде на перескладання:))))";
  }

  show(): string {
    return ("увага, " + this.type + " випробування буде відбуватись тут: " + this.place);
  }
}
