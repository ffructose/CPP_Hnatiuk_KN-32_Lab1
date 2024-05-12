import { ConfigService } from "./config.service";
import { Theater } from "./Theater";
export class TheaterList {
  // array with list of theaters
  theaterList = new Array();
  //array with search results
  searchTheater = new Array();
  //open array of rows with seaarch results
  searchTheaterResult: string[] = [];
  //service for supervising changes in actors
  actSub = this.configService.act$
    // subscribe on actors
    .subscribe(() => {
      //getting new value of actor
      let act = this.configService.act$.value;

      this.search(act.id);
    });

  constructor(private configService: ConfigService) {
    let theater = new Theater();
    theater.name = "Театр Франка";
    theater.act_id = 0;
    theater.address = "Київ";
    this.add(theater);

    let theater1 = new Theater();
    theater1.name = "Театр Лесі Українки";
    theater1.act_id = 1;
    theater1.address = "Київ";
    this.add(theater1);

    this.search(0);

  }

  add(theater: Theater) {
    this.theaterList.push(theater);
    this.search(theater.act_id);
  }
  search(id_act: number) {
    this.searchTheater = this.theaterList.filter((theater) => {
      return theater.act_id == id_act;
    })
    this.searchTheaterResult = [];
    this.searchTheater.forEach(el => {
      this.searchTheaterResult.push('Назва: ' + el.name);
      this.searchTheaterResult.push('Адреса: ' + el.address);

    })
  }
}
