import { Component, OnInit } from '@angular/core';
import { ActorList } from './service/ActorList';
import { TheaterList } from './service/TheaterList';
import { Theater } from './service/Theater';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Actor } from './service/Actor';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {
  theats = new TheaterList();

  configService = new ConfigService();

  subscriptions: Subscription[] = [];

  actorList = new ActorList(this.configService);

  theat: Theater = new Theater();

  count = 0;

  constructor() { }

  ngOnInit() {
    const theatSub = this.configService.theat$
      .subscribe(() => { this.theat = this.configService.theat$.value; });
    this.subscriptions.push(theatSub);
  }
  nextTheat() {
    if (this.count < this.theats.theat.size - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setTheat(this.theats.theat.get(this.count));
  }

  addActor(name: any, age: any, homecity: any, nationality: any, gender: any) {
    let actor = new Actor();
    actor.name= name;
    actor.age= age;
    actor.homecity= homecity;
    actor.nationality= nationality;
    actor.gender= gender;
    actor.id_theat= this.theat.id;
    this.actorList.add(actor);
  }

  addTheat(theat: any) {
    let t = new Theater();
    t.id = this.theats.theat.size;
    t.name = theat;
    this.theats.add(t);
  }
  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}
