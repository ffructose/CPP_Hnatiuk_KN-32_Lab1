import { Component, OnInit } from '@angular/core';
import { TheaterList } from './service/TheaterList';
import { ActorList } from './service/ActorList';
import { Actor } from './service/Actor';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Theater } from './service/Theater';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  acts = new ActorList();

  configService = new ConfigService();

  subscriptions: Subscription[] = [];

  theaterList = new TheaterList(this.configService);

  act: Actor = new Actor();

  count = 0;

  constructor() { }

  ngOnInit() {
    const actSub = this.configService.act$
      .subscribe(() => { this.act = this.configService.act$.value; });
    this.subscriptions.push(actSub);
  }
  nextAct() {
    if (this.count < this.acts.act.size - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setAct(this.acts.act.get(this.count));
  }

  addTheater(name: any, address: any) {
    let theater = new Theater();
    theater.name = name;
    theater.address = address;
    theater.act_id = this.act.id;
    this.theaterList.add(theater);
  }

  addAct(act: any) {
    let a = new Actor();
    a.id = this.acts.act.size;
    a.name = act;
    this.acts.add(a);
  }
  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
