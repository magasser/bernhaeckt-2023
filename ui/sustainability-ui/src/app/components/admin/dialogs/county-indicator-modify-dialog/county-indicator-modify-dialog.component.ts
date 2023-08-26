import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Source } from 'src/app/models/source';

export interface ModifyCountyIndicator {
  value: number;
  sources: Source[];
  source: Source;
}

@Component({
  selector: 'app-county-indicator-modify-dialog',
  templateUrl: './county-indicator-modify-dialog.component.html',
  styleUrls: ['./county-indicator-modify-dialog.component.scss']
})
export class CountyIndicatorModifyDialogComponent {
  constructor(public dialogRef: MatDialogRef<ModifyCountyIndicator>, @Inject(MAT_DIALOG_DATA) public data: ModifyCountyIndicator) {}

  public onCancel(): void {
    this.dialogRef.close();
  }
}
