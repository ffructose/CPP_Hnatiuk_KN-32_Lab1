import { Theater } from "./Theater";
export class TheaterList {
  theat = new Map();
  constructor() {
    this.theat.set(0, { id: 0, name: "Театр Франка" });
    this.theat.set(1, { id: 1, name: "Театр Лесі Українки" });
  }
  add(theater: Theater) {
    this.theat.set(theater.id, { id: theater.id, name: theater.name });
  }
}
