import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface AddIndicator {
  name: string;
  comment: string;
  unit: string;
  topicId: string;
}

@Component({
  selector: 'app-add-indicator-dialog',
  templateUrl: './add-indicator-dialog.component.html',
  styleUrls: ['./add-indicator-dialog.component.scss'],
})
export class AddIndicatorDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddIndicatorDialogComponent>, @Inject(MAT_DIALOG_DATA) public indicator: AddIndicator) {}

  public onCancel(): void {
    this.dialogRef.close();
  }
}
