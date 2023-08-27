import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemType} from "../../visualization-row/item-type";
export interface AddItem {
    type: ItemType,
    weight: number
}

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
    constructor(public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public item: AddItem) {
    }

    itemTypes: any = Object.entries(ItemType);

    public onCancel(): void {
        this.dialogRef.close();
    }
}
