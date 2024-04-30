import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Subjects } from './Class/subjects';
import { Validators } from '@angular/forms';
import { ValidatorService } from './Service/validator.service';
import { amountValidator, typeValidator } from './Service/myValidator';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {


  subjectsForm!: FormGroup;
  subjects!: Subjects;




  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.subjectsForm = this.fb.group({
      subjectName: ['', [Validators.required]],
      kafedraName: '',
      lectionsAmount: ['', [amountValidator()]],
      labsAmount: ['', [amountValidator()]],
      controlType: ['', [typeValidator()]],
      teacherLabs: '',
      teacherLections: '',
      teachersList: new FormArray([new FormControl()])
    })
  }

  addTeacher() {
    console.log("add");
    (this.subjectsForm.controls['teachersList'] as FormArray).push(
      new FormControl()
    )
  }

  deleteTeacher(i: any) {
    console.log("delete");
    (this.subjectsForm.controls['teachersList'] as FormArray).removeAt(i)
  }

  getControls() { return (this.subjectsForm.get('teachersList') as FormArray).controls; }

  onSubmit() {
    let subN = this.subjectsForm.value.subjectName;
    let kafN = this.subjectsForm.value.kafedraName;
    let lecA = this.subjectsForm.value.lectionsAmount;
    let labA = this.subjectsForm.value.labsAmount;
    let conT = this.subjectsForm.value.controlType;
    let tLabs = this.subjectsForm.value.teacherLabs;
    let tLections = this.subjectsForm.value.teacherLections;
    let tList = this.subjectsForm.value.teachersList;
    let valid = new ValidatorService();
    let i = 0;
    if (!valid.validate_amount(lecA) || !valid.validate_amount(labA) || !valid.validate_type(conT)) {
      this.presentAlert("Перевірте введені дані");
    }
    else {
      this.subjects = new Subjects(subN, kafN, lecA, labA, conT, tLabs, tLections, tList);
      console.log("submit");
    }
  }

  async presentAlert(mesage: string) {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: '',
      message: mesage,
      buttons: ['OK']
    });
    await alert.present();
  }



  ngOnInit() { }

}
