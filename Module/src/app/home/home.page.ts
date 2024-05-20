import { Component, ChangeDetectorRef } from '@angular/core';
import { MatrixOperationResult } from '../myform/matrix-operation-result.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  highlightedCells: Set<string> = new Set();
  operationResults!: MatrixOperationResult;

  constructor(private cdr: ChangeDetectorRef) { }

  handleOperationResult(result: MatrixOperationResult) {
    this.operationResults = result;
    this.highlightAdjacentMatches();
    this.cdr.detectChanges();  // Mark the component for change detection
  }

  highlightAdjacentMatches() {
    this.highlightedCells.clear();
    let rows = this.operationResults.array.length;
    let columns = this.operationResults.array[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (j + 1 < columns && this.operationResults.array[i][j] === this.operationResults.array[i][j + 1]) {
          this.highlightedCells.add(`${i}-${j}`);
          this.highlightedCells.add(`${i}-${j + 1}`);
        }
        if (i + 1 < rows && this.operationResults.array[i][j] === this.operationResults.array[i + 1][j]) {
          this.highlightedCells.add(`${i}-${j}`);
          this.highlightedCells.add(`${i + 1}-${j}`);
        }
      }
    }
  }
}
