import { TheaterList } from './TheaterList';
import { Theater } from './Theater';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // current theater
  currentTheat = DEFAULT_THEAT;
  // object supervisor
  theat$: BehaviorSubject<Theater> = new BehaviorSubject<Theater>(DEFAULT_THEAT);
  // change of current theater to a new theater
  setTheat(theat: Theater){
    console.log("!!!!!!!!!!CHANGES!!!!!!!!");
    // generation of next value
    this.theat$.next(theat);
  }
   constructor() { }
}
// creating list of theaters
var theaterList = new TheaterList();
// get default value
const DEFAULT_THEAT = theaterList.theat.get(0);
