import { Component, OnInit, Input } from '@angular/core';
import { Subjects } from '../myform/Class/subjects';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {

  show_update: boolean = false;
  subjects: Subjects[] = [];

  constructor() { }

  ngOnInit() { }
  addSubject(event: any) {
    if (event as Subjects) {
      let subject: Subjects = event;
      this.subjects.push(subject);
      console.log(this.subjects);
    }
    else throw new Error("Error of type");
  }
  update() { this.show_update = true; }
  showUp(event: any) {
    if (typeof event === "boolean") { this.show_update = event; }
    else throw new Error("Error of type");
  }
  update_save(event: any, i: number) {
    //перевіряємо тип event
    if (event as Subjects) {
      this.subjects[i] = event;
    } else
      throw new Error("Error of type");
  }





}
