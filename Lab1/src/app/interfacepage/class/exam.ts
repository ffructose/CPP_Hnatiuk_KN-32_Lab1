import { iInfo } from "../interface/iInfo";
import { iShow } from "../interface/iShow";
export class Exam implements iInfo, iShow {
  course!: number;
  name!: string;
  subject!: string;
  complexity!: number;


  constructor(course: number, name: string, subject: string) {
    this.course = course;
    this.name = name;
    this.subject = subject;
  }

  isHard() {
    if (this.complexity >= 65) return true;
    else return false;
  }

  show(): string {
    return (this.name + " з предмету " + this.subject + " що відбудеться на " + this.course + " курсі буде мати складність " + this.complexity);
  }
}
