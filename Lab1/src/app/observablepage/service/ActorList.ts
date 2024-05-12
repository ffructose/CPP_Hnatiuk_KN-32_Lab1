import { Actor } from "./Actor";
import { ConfigService } from "./config.service";

export class ActorList {
  // array with list of actors
  actorList = new Array();
  //array with search results
  searchActor = new Array();
  //open array of rows with search results
  searchActorResult: string[] = [];
  //service for supervising changes in theaters
  theatSub = this.configService.theat$
    // subscribe on theaters
    .subscribe(() => {
      //getting new value of theater
      let theat = this.configService.theat$.value;

      this.search(theat.id);
    });

  constructor(private configService: ConfigService) {
    let actor = new Actor();
    actor.name= "А́да Микола́ївна Ро́говцева";
    actor.age= 87;
    actor.homecity= "Глухів";
    actor.nationality= "українка";
    actor.gender= "жінка";
    actor.id_theat= 0;
    this.add(actor);

    let actor1 = new Actor();
    actor1.name= "Богда́н Миха́йлович Беню́к";
    actor1.age= 67;
    actor1.homecity= "Битків";
    actor1.nationality= "українець";
    actor1.gender= "чоловік";
    actor1.id_theat= 1;
    this.add(actor1);

    this.search(0);

  }

  add(actor: Actor) {
    this.actorList.push(actor);
    this.search(actor.id_theat);
  }
  search(theat_id: number) {
    this.searchActor = this.actorList.filter((actor) => {
      return actor.id_theat == theat_id;
    })
    this.searchActorResult = [];
    this.searchActor.forEach(el => {
      this.searchActorResult.push('ПІБ: ' + el.name);
      this.searchActorResult.push('Вік: ' + el.age);
      this.searchActorResult.push('Місто народження: ' + el.homecity);
      this.searchActorResult.push('Національність: ' + el.nationality);
      this.searchActorResult.push('Гендер: ' + el.gender);

    })
  }
}
