import { Component, OnInit } from '@angular/core';
import { Furniture } from './Class/furniture';
import { Cupboard } from './Class/cupboard';
import { Sofa } from './Class/sofa';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  //polymorf container
  furniture: Furniture[] = [];
  //max
  max: number = 0;

  Inputx!: string;
  x: number = 10;

  averageSofaCost: number = 0;
  amountSofa: number = 0;
  averageCupboardCost: number = 0;
  amountCupboard: number = 0;
  constructor() { }

  //generation of random nums from 1 to max
  // input - max
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 150);
  }
  //func for output
  // input - amount of elements in polymorf container
  res(x: string = "10") {
    //creating array of figures
    this.furniture = new Array();
    //getting inputes value
    let n = parseFloat(x);
    //in loop
    for (let i = 0; i < n; i++) {
      //adding Cupboard to container
      this.furniture.push(new Cupboard("Шафа", this.getRandomInt(400)));
      //adding Sofa to container
      this.furniture.push(new Sofa("Диван", this.getRandomInt(400)));
    }

    this.furniture.forEach((element) => {
      element.getCost();
      if (element.name == "Шафа") {
        this.amountCupboard = this.amountCupboard + 1;
        this.averageCupboardCost = this.averageCupboardCost + element.cost;
      }
      if (element.name == "Диван") {
        this.amountSofa = this.amountSofa + 1;
        this.averageSofaCost = this.averageSofaCost + element.cost;
      }
      console.log(element.show())
    });

  }

  ngOnInit() {
  }

  getAverage() {
    return ("Середня вартість шаф: " + (this.averageCupboardCost / this.amountCupboard) +
      "; Середня вартість диванів: " + (this.averageSofaCost / this.amountSofa) + ";");
  }

}
