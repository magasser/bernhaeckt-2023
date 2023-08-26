import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemType} from "../../visualization-row/item-type";

export interface AddRow {
  rows: number,
  title: string,
  description: string
}

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent {
  constructor(public dialogRef: MatDialogRef<AddRowComponent>, @Inject(MAT_DIALOG_DATA) public item: AddRow) {
  }

  itemTypes: any = Object.entries(ItemType);

  public onCancel(): void {
    this.dialogRef.close();
  }
}
