import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './service/firebase.service';
import { ActorList } from './service/ActorList';
import { TheaterList } from './service/TheaterList';
import { Theater } from './service/Theater';
import { ConfigBdService } from './service/config-bd.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Actor } from './service/Actor';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-observable-bd',
  templateUrl: './observable-bd.page.html',
  styleUrls: ['./observable-bd.page.scss'],
})
export class ObservableBdPage implements OnInit {

  theats = new TheaterList();

  configService = new ConfigBdService();

  subscriptions: Subscription[] = [];

  actorList = new ActorList(this.configService);

  theat: Theater = new Theater();

  count = 0;
  bdActor = 'Actor';
  bdTheat = 'Theater';

  constructor(public fbService: FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdActor, true);
    let taskRes = this.fbService.getRecordList(this.bdActor, true);

    taskRes.snapshotChanges().subscribe()
    this.fetchTask(this.bdTheat, false);

    let taskRes1 = this.fbService.getRecordList(this.bdTheat, false);
    taskRes1.snapshotChanges().subscribe()


    const theatSub = this.configService.theat$
      .subscribe(() => { this.theat = this.configService.theat$.value; });
    this.subscriptions.push(theatSub);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
      console.log(res)
      if (op) this.actorList.actorList = res;
      else {
        this.theats.theat = res;
        this.theat = this.theats.theat[this.count];
        this.actorList.search(this.theat.id);
      }
    })
  }

  nextTheat() {
    if (this.count < this.theats.theat.length - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setTheat(this.theats.theat[this.count]);
  }

  addActor(name: any, age: any, homecity: any, nationality: any, gender: any) {
    let actor = new Actor();
    actor.name = name;
    actor.age = age;
    actor.homecity = homecity;
    actor.nationality = nationality;
    actor.gender = gender;
    actor.id_theat = this.theat.id;

    this.fbService.createActor(actor);
    this.actorList.search(this.theat.id);
    this.actorList.add(actor);
  }

  addTheat(theat: any) {
    let t = new Theater();
    t.id = this.theats.theat.length + 1;
    t.name = theat;
    this.fbService.createTheat(t);
  }
  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }

}
