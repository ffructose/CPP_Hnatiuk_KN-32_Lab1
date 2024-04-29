import { LogService } from '../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }
  getRecursion(x: number, mem: number, mul: number, n: number, sum: number) {
    let sqr = x * x, min = 1E-12;
    mem = mem * sqr / (2 * n - 1) / (2 * n - 2);
    n++;
    sum = sum + mul * mem;
    mul = -mul;
    if (mem > min || mem < -min)
      this.getRecursion(x, mem, mul, n, sum);
    else this.yy = sum;
  }
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    console.log("hi");
    let x = xn, y = 1.0;
    while (x <= xk) {
      this.getRecursion(x, 1, -1, 2, y);
      this.xy.set(x, this.yy);
      if (this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}
