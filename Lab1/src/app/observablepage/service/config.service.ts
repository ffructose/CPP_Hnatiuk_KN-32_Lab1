import { ActorList } from './ActorList';
import { Actor } from './Actor';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // current actor
  currentAct = DEFAULT_ACT;
  // object supervisor
  act$: BehaviorSubject<Actor> = new BehaviorSubject<Actor>(DEFAULT_ACT);
  // change of current actor to a new actor
  setAct(act: Actor){
    console.log("!!!!!!!!!!CHANGES!!!!!!!!");
    // generation of next value
    this.act$.next(act);
  }
   constructor() { }
}
// creating list of actors
var actorList = new ActorList();
// get default value
const DEFAULT_ACT = actorList.act.get(0);
