import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Indicator } from 'src/app/models/indicator';

export interface AddIndicatorData {
  indicators: Indicator[];
  selectedIndicator: Indicator;
  source: string;
  value: number;
}

@Component({
  selector: 'app-add-indicator-data-dialog',
  templateUrl: './add-indicator-data-dialog.component.html',
  styleUrls: ['./add-indicator-data-dialog.component.scss']
})
export class AddIndicatorDataDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddIndicatorData>, @Inject(MAT_DIALOG_DATA) public data: AddIndicatorData) {}

  public onCancel(): void {
    this.dialogRef.close();
  }
}
