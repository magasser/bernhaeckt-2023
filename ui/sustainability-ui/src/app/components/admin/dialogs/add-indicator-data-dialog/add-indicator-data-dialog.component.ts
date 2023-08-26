import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Indicator } from 'src/app/models/indicator';
import { Source } from 'src/app/models/source';

export interface AddIndicatorData {
  indicators: Indicator[];
  indicator: Indicator;
  sources: Source[];
  source: Source;
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
