import { iShow } from "../interface/iShow";
import { Exam } from "./exam";

export class GradExam extends Exam implements iShow {
  constructor(
    override course: number,
    override name: string,
    override subject: string
  ) {
    super(course, name, subject);
  }

  getComplexity() {
    if (this.course == 1 && this.subject =="Maths") this.complexity = 85;
    if (this.course == 2 && this.subject =="OOI") this.complexity = 100;
    if (this.course == 1 && this.subject =="Probability") this.complexity = 81;
    if (this.course == 3 && this.subject =="OOP") this.complexity = 42;
    if (this.course == 2 && this.subject =="Networks") this.complexity = 20;
  }
}
