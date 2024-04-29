import { Component, OnInit } from '@angular/core';
import { Challenge } from './class/challenge';
import { Test } from './class/test';
import { Exam } from './class/exam';
import { GradExam } from './class/gradExam';
@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {

  show: string = "в консолі видно результат виконання всіх функції для всіх класів";

  constructor() { }

  ngOnInit() {
  }

  res() {

    let challenge = new Challenge("аудіо", "метро Виставковий центр");
    let test = new Test(25, "Мудл");
    let exam = new Exam(1, "модульна контрольна робота", "Probability");
    let gradExam = new GradExam(1, "страшний екзамен", "Maths");
    gradExam.getComplexity();
    exam.complexity = 42;
    console.log(challenge.getRules());
    console.log(challenge.show());
    console.log(test.getDescription());
    console.log(test.show());
    console.log(exam.isHard());
    console.log(exam.show());
    console.log(gradExam.isHard());
    console.log(gradExam.show());
  }

}
