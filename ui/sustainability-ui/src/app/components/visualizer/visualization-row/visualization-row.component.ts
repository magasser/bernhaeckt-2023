import {Component, Input} from '@angular/core';
import {CountyData} from "../../../models/countyData";
import {CountyService} from "../../../services/county.service";
import {ItemType} from "./item-type";
import {MatDialog} from "@angular/material/dialog";
import {AddItemComponent} from "../dialogs/add-item/add-item.component";
import {AddRowComponent} from "../dialogs/add-row/add-row.component";

@Component({
    selector: 'app-visualization-row',
    templateUrl: './visualization-row.component.html',
    styleUrls: ['./visualization-row.component.scss']
})
export class VisualizationRowComponent {
    @Input()
    config: any = {};
    ItemType: any = ItemType;


    constructor(private countyService: CountyService, public dialog: MatDialog) {
    }

    data: CountyData[] = [];
    filteredData: CountyData[] = [];


    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.countyService.getCountiesData().subscribe(next => {
                this.data = next;
                this.filteredData = this.data;
            }
        )
    }

    updateFilteredData(event: CountyData[]) {
        this.filteredData = event
    }

    sortByWeight(a: any, b: any) {
        if (a.weight < b.weight) {
            return -1;
        }
        if (a.weight > b.weight) {
            return 1;
        }
        return 0;
    }

    removeItem(index: number) {
        this.config.config.sort(this.sortByWeight).splice(index, 1);
    }

    openAddItemDialog() {
        const dialogRef = this.dialog.open(AddItemComponent, {
            data: {type: '', weight: 0}
        });

        dialogRef.afterClosed().subscribe(async (result) => {
            if (!result) {
                return;
            }
            if (this.config?.config === null) {
                this.config.config = [];
            }
            this.config.config.push(result);
        });
    }

    openEditRowDialog() {
        const dialogRef = this.dialog.open(AddRowComponent, {
            data: {...this.config}
        });

        dialogRef.afterClosed().subscribe(async (result) => {
            if (!result) {
                return;
            }
            this.config = result;
        });
    }
}
