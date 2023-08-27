import {Component} from '@angular/core';
import {CountyService} from "../../services/county.service";
import {ItemType} from "../../components/visualizer/visualization-row/item-type";
import {MatDialog} from "@angular/material/dialog";
import {AddRowComponent} from "../../components/visualizer/dialogs/add-row/add-row.component";

@Component({
    selector: 'app-data-evaluation',
    templateUrl: './data-evaluation.component.html',
    styleUrls: ['./data-evaluation.component.scss'],
    providers: [
        CountyService
    ],
})
export class DataEvaluationComponent {
    constructor(public dialog: MatDialog) {
    }

    removeItem(index: number) {
        this.rows.splice(index, 1);
    }

    openAddRowDialog() {
        const dialogRef = this.dialog.open(AddRowComponent, {
            data: {title: '', config: [], filters: {}, description: '', rows: 1}
        });

        dialogRef.afterClosed().subscribe(async (result) => {
            if (!result) {
                return;
            }
            if (this.rows === null) {
                this.rows = [];
            }
            this.rows.push(result);
        });
    }

    rows: any[] = [
        {
            title: 'Alle Gemeinden',
            config: [{type: ItemType.TABLE, weight: 2}, {type: ItemType.MATRIX, weight: 1}],
        },
        {
            title: 'Nur Gsteig',
            config: [{type: ItemType.TABLE, weight: 2}],
            filters: { counties: ['Gsteig']},
        },
        {
            title: 'Nur Umwelt',
            config: [{type: ItemType.TABLE, weight: 2}, {type: ItemType.MATRIX, weight: 1}],
            rows: 2,
            filters: { dimensions: ['Umwelt']},
        },
        {
            title: 'Gemeinden Bern',
            description: 'Alle Gemeinden im Kanton Bern',
            config: [{type: ItemType.TABLE, weight: 2}]
        },
        {
            title: 'Mehrere Tabellen in einem Tab',
            description: 'Mehrere Male die gleiche Tabelle',
            rows: 2,
            config: [{type: ItemType.TABLE, weight: 2}, {type: ItemType.TABLE, weight: 5}]
        },
        {
            title: 'Vergleich verschiedener Gemeinden',
            description: 'Spider Diagram',
            config: [{type: ItemType.SPIDER_CHART, weight: 2}]
        }
    ];
}
