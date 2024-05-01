import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subjects } from '../myform/Class/subjects';
import { ValidatorService } from '../myform/Service/validator.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

  @Input() subject!: Subjects;
  @Input() show: boolean = true;
  @Output() subjectChange: EventEmitter<Subjects> = new EventEmitter<Subjects>();
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_amount(a: number): boolean {
    let validator = new ValidatorService()
    if (a)
      if (!validator.validate_amount(a)) return false;
      else return true;
    else return true;
  }
  validate_type(t: string): boolean {
    let validator = new ValidatorService()
    if (t)
      if (!validator.validate_type(t)) return false;
      else return true;
    else return true;
  }

  save(subN: any, kafN: any, lecA: any,
    labA: any, conT: any, tLabs: any,
    tLections: any) {

    this.show = false;
    if ((lecA) && !this.validate_amount(lecA)) throw Error("Incorrect amount of lectures")
    if ((labA) && !this.validate_amount(labA)) throw Error("Incorrect amount of labs")
    if ((conT) && !this.validate_type(conT)) throw Error("Incorrect type of control")
    this.subject = new Subjects(subN, kafN, lecA, labA, conT, tLabs, tLections, this.subject.teachersList);
    this.subjectChange.emit(this.subject);
    this.showChange.emit(this.show);
  }

  ngOnInit() { }

}
