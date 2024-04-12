import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  //data array
  data: any = [];
  data_users: any = [];

  // elements visibility
  showDetails: boolean[] = new Array(1000).fill(false);

  dataUrl = 'https://api.jsonbin.io/v3/qs/6618f238e41b4d34e4e3020b';

  //object for waiting
  loading: any;

  // input field
  Inputx!: number;
  x: number = 0;


  constructor(public loadingController: LoadingController) {}

  // reading func
  async load() {

    this.data = [];
    this.data_users = [];

    //making new controller
    this.loading = await this.loadingController.create({
      spinner: "dots",
      message: 'Секундочку...'
    });

    //present the loading controller
    await this.loading.present();

    //getting request async
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_users.push(this.data[i][0]);
          i++;
        }


        this.loading.dismiss();

      });
  }

  //elements visibility
  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  getColor(num: number, x: number){
    return num < x ? 'pink' : '';
  }

  ngOnInit() {
  }

}
