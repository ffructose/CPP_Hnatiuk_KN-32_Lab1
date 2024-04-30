import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class RecursionService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getRecursion(x: number, i: number, sum: number): number {
    if (i > 2000) {
      return (Math.PI / 2 - (4 / Math.PI) * sum);
    }
    let odd = 2 * i + 1;
    sum += Math.cos(odd * x) / (odd * odd);
    return this.getRecursion(x, i + 1, sum); // Correct use of return with the recursive call
  }

  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
    let x = xn, y = 0.0;
    while (x <= xk) {
      y = this.getRecursion(x, 0, 0);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write("REC x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      }
      x = x + h;
    }
    return this.xy;
  }
}
