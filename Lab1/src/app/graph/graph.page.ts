import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  //поле для створення графіку
  // ?: позначення необов'язкової/додаткової змінної
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  Inputxn!: string;
  Inputxk!: string;
  Inputa!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  a: number = 0;
  h: number = 0;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit() {
  }


  lineChartMethod() {

    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    // створення нового графіка
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line', //тип - лінійний графік
      data: { // параметри графіка
        labels: this.xx, // точки осі х
        datasets: [ // властивості, що створюють графік
          {
            label: 'Графік',

            fill: false,
            borderColor: 'rgba(199, 58, 110, 0.9)',
            pointRadius: 1,
            data: this.yy, // точки осі y
          }
        ]
      }
    });
  }


  graph(xn: string = "1.7", xk: string = "4.9", a: string = "1", h: string = "0.5") {
    try {
      this.data1 = [];
      this.xn = parseFloat(xn);
      this.xk = parseFloat(xk);
      this.a = parseFloat(a);
      this.h = parseFloat(h);
      let x: number, y: number, i: number = 0;
      x = this.xn;
      this.xx = new Array();
      this.yy = new Array();

      if ((isNaN(this.xn) == true) || (isNaN(this.xk) == true) || (isNaN(this.h) == true) || (isNaN(this.a) == true)) {
        throw new Error('Parameter is not a number!');
      }

      while (x <= this.xk) {
        if (x <= 0) {
          y = (Math.sin(x + 3)) / (Math.pow(x, 5) * (1 / Math.tan(2 * Math.pow(x, 3))));
        }
        else {
          if (x <= this.a) {
            y = (Math.abs(x) + 2) / (Math.pow(Math.cos(Math.pow((Math.pow(x, 3) + 2 * x + 1), 2)), 2));
          }
          else {
            y = (Math.pow(Math.sin(x + 5), 2)) / (Math.cbrt(Math.abs(x) + 2 - 1));
          }
        }
        this.xx.push(x.toFixed(1));
        this.yy.push(parseFloat(y.toFixed(1)));
        let s = "x = " + x.toFixed(1) + "  ;      y = " + y.toFixed(1);
        this.data1.push(s);
        x = x + this.h;
      }
      this.lineChartMethod();
    }
    catch (error) {
      console.log(error)
    }
  }
}
