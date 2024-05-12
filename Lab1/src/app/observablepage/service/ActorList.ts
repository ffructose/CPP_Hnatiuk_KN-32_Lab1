import { Actor } from "./Actor";
export class ActorList {
  act = new Map();
  constructor() {
    this.act.set(0, { id: 0, name: "Влад Михальчук" });
    this.act.set(1, { id: 1, name: "Михайло Матюхін" });
  }
  add(actor: Actor) {
    this.act.set(actor.id, { id: actor.id, name: actor.name });
  }
}
