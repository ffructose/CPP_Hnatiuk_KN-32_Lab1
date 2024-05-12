import { Actor } from "./Actor";
import { ConfigBdService } from "./config-bd.service";

export class ActorList {
  // array with list of actors
  actorList = new Array();
  //array with search results
  searchActor = new Array();
  //service for supervising changes in theaters
  theatSub = this.configService.theat$
    // subscribe on theaters
    .subscribe(() => {
      //getting new value of theater
      let theat = this.configService.theat$.value;

      this.search(theat.id);
    });

  constructor(private configService: ConfigBdService) {  }

  add(actor: Actor) {
    this.actorList.push(actor);
    this.search(actor.id_theat);
  }
  search(theat_id: number) {
    this.searchActor = this.actorList.filter((actor) => {
      return actor.id_theat == theat_id;
    })

  }
}
