import {Component} from '@angular/core';
import {CountyService} from "../../services/county.service";
import {ItemType} from "../../components/visualizer/visualization-row/item-type";

@Component({
    selector: 'app-data-evaluation',
    templateUrl: './data-evaluation.component.html',
    styleUrls: ['./data-evaluation.component.scss'],
    providers: [
        CountyService
    ],
})
export class DataEvaluationComponent {
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
            title: 'I Love Tables',
            description: 'Mehrere Male die gleiche Tabelle',
            rows: 2,
            config: [{type: ItemType.TABLE, weight: 2}, {type: ItemType.TABLE, weight: 5}]
        },
        {
            title: 'AND I LOVE SPIDERS',
            description: 'Nur zum Spider Diagramm darstellen',
            config: [{type: ItemType.SPIDER_CHART, weight: 2}]
        }
    ];
}
