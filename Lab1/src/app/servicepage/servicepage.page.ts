import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService) {
    Chart.register(...registerables)
  }

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xx: string[] = [];
  yy: number[] = [];
  data1: string[] = [];

  Inputxn!: string;
  Inputxk!: string;
  Inputh!: string;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = '';
      let y: number = 0;
      y = value;
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    })
  }

  res(xn: any = -3.14, xk: any = 3.14, h: any = 0.1) {
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(this.xn, this.xk, this.h);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(this.xn, this.xk, this.h);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(this.xn, this.xk, this.h);
    this.input();
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

  graph(xn: string = "-3.14", xk: string = "3.14", h: string = "0.5") {

    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    let x: number;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();

    while (x <= this.xk) {
      this.xx.push(x.toFixed(2));
      this.yy.push(parseFloat(this.xySeries.get(x)));
      x = x + this.h;
    }

    this.lineChartMethod();

  }

  ngOnInit() {
  }


}
