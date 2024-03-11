import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }


  a: number[][] = [];
  n: number = 0;

  ras(n: any) {
    this.a = [];
    try {
      this.n = parseInt(n);

      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!')
      }

      if (n<=0){
        throw new Error('Parameter less than zero!')
      }
      let i: number = 0, j:number = 0;

      this.a = Array(this.n);
      console.log("Array created");
      for(i = 0;i<this.n;i++){
        this.a[i] = Array(this.n);

        for(j=0;j<this.n;j++){
          this.a[i][j] = Math.floor(Math.random() * 201) - 100;
        }
      }

    }
    catch (error) {
      console.log(error)
    }
  }

  getColor(b:number){
    if ((b > 0) && b % 2 == 0){
      return "green"
    }
    else
    return "red"
  }

}

