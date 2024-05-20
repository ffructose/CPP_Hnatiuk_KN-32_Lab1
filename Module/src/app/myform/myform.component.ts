import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorService } from './Service/validator.service';
import { amountValidator } from './Service/myValidator';
import { AlertController } from '@ionic/angular';
import { MatrixOperationResult } from './matrix-operation-result.interface';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  myForm!: FormGroup;
  array: number[][] = [];
  finalArray: number[][] = [];
  isRandom!: boolean;
  printResult!: boolean;

  @Output() operationResult = new EventEmitter<MatrixOperationResult>();

  constructor(private fb: FormBuilder, private alertController: AlertController) {
    this.myForm = this.fb.group({
      amountRows: ['', [amountValidator()]],
      amountCols: ['', [amountValidator()]],
    });
  }


  fillRandomNumbers() {
    this.isRandom = true;
    this.printResult = false;
    let rows = this.myForm.value.amountRows;
    let columns = this.myForm.value.amountCols;
    let valid = new ValidatorService();
    if (!valid.validate_amount(rows) || !valid.validate_amount(columns)) {
      this.presentAlert("Перевірте введені дані");
    } else {
      this.array = []; // Очищення масиву перед заповненням
      for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < columns; j++) {
          let randomValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
          row.push(randomValue);
        }
        this.array.push(row);
      }
      console.log("submit");
    }
  }

  fillZeroes() {
    this.isRandom = false;
    this.printResult = false;
    let rows = this.myForm.value.amountRows;
    let columns = this.myForm.value.amountCols;
    let valid = new ValidatorService();
    if (!valid.validate_amount(rows) || !valid.validate_amount(columns)) {
      this.presentAlert("Перевірте введені дані");
    } else {
      this.array = []; // Очищення масиву перед заповненням
      for (let i = 0; i < rows; i++) {
        let row: number[] = [];
        for (let j = 0; j < columns; j++) {
          row.push(0);
        }
        this.array.push(row);
      }
      console.log("submit");
    }
  }

  handleInput(rowIndex: number, colIndex: number, event: any) {
    this.array[rowIndex][colIndex] = parseFloat(event.target.value);
  }

  onSubmit() {
    this.finalArray = this.array;
    this.printResult = true;

    this.operationResult.emit({
      printResult: this.printResult,
      array: this.finalArray,
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() { }
}
