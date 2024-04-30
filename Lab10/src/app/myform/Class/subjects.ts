export class Subjects {
  subjectName: string = "";
  kafedraName: string = "";
  lectionsAmount: number = 0;
  labsAmount: number = 0;
  controlType: string = "";
  teacherLabs: string = "";
  teacherLections: string = "";

  teachersList: string[] = [];

  constructor(
    subjectName: string,
    kafedraName: string,
    lectionsAmount: number,
    labsAmount: number,
    controlType: string,
    teacherLabs: string,
    teacherLections: string,
    teachersList: string[] = []) {

    this.subjectName = subjectName;
    this.kafedraName = kafedraName;
    this.lectionsAmount = lectionsAmount;
    this.labsAmount = labsAmount;
    this.controlType = controlType;
    this.teacherLabs = teacherLabs;
    this.teacherLections = teacherLections;
    this.teachersList = teachersList;
  }
}
