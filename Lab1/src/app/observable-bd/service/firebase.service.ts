import { Theater } from './Theater';
import { Actor } from './Actor';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  actorListRef?: AngularFireList<any>;
  theatListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  createActor(actor: Actor) {
    return this.actorListRef?.push({
      name: actor.name,
      age: actor.age,
      homecity: actor.homecity,
      nationality: actor.nationality,
      gender: actor.gender,
      id_theat: actor.id_theat
    })
  }
  createTheat(theat: Theater) {
    return this.theatListRef?.push({
      id: theat.id,
      name: theat.name
    })
  }
  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef = " + this.bdRef.snapshotChanges());
    return this.bdRef;
  }
  // true - actor
  // false - theater
  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.actorListRef = this.db.list('/' + bd);
      return this.actorListRef;
    }
    else {
      this.theatListRef = this.db.list('/' + bd);
      return this.theatListRef;
    }
  }

  updateActor(id: number, actor: Actor, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      name: actor.name,
      age: actor.age,
      homecity: actor.homecity,
      nationality: actor.nationality,
      gender: actor.gender,
      id_theat: actor.id_theat
    })
  }

  updateTheat(id: number, theat: Theater, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: theat.id,
      name: theat.name
    })
  }
  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }


}
