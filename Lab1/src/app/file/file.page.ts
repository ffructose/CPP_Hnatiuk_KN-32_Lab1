import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  data: any = [];
  data_users: any = [];

  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/qs/65f79176dc74654018b468ae'; //адреса файлу

  loading: any;

  max: number = 0;
  min: number = 100;

  constructor(public loadingController: LoadingController) {
  }

  ngOnInit() {
  }

  async load() {

    this.loading = await this.loadingController.create({
      spinner: "dots",
      message: "триває завантаження..."
    });

    await this.loading.present();

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

//видимість елементів
  toggleDetails(i: number) {

    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    }
    else {
      this.showDetails[i] = true;
    }
  }

  getColor(a: number, b: number) {
    return a == b ? '' : '';

  }
}
