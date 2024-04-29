import { iShow } from "../interface/iShow";

export class Test implements iShow {
  time!: number;
  platform!: string;

  constructor(time: number, platform: string) {
    this.time = time;
    this.platform = platform;
  }

  getDescription(){
    return "не порушуйте академічну доброчесність!!!!!";
  }

  show(): string {
    return ("на виконання тесту буде виділено " + this.time + " хвилин, на платформі " + this.platform);
  }
}
