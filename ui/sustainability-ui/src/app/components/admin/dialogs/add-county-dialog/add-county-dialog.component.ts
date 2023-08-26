import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface AddCounty {
  name: string;
  zip: number;
}

@Component({
  selector: 'app-add-county-dialog',
  templateUrl: './add-county-dialog.component.html',
  styleUrls: ['./add-county-dialog.component.scss'],
})
export class AddCountyDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddCountyDialogComponent>, @Inject(MAT_DIALOG_DATA) public county: AddCounty) {}

  public onCancel(): void {
    this.dialogRef.close();
  }
}
