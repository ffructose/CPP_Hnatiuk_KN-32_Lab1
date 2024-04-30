import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number) {
    let odd: number = 1, sum: number = 0,  i: number = 0;

    do {
      sum = sum + Math.cos(odd * x) / (odd * odd);
      odd = odd + 2;
      i = i + 1;
    }
    while (i < 10000)
    return (Math.PI / 2 - (4 / Math.PI) * sum);
  }
  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    let x = xn, y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService)
        this.logService.write("SER x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}

