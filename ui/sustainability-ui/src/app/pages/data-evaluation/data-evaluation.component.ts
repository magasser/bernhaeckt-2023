import {Component} from '@angular/core';
import {CountyService} from "../../services/county.service";

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
        {title: 'Alle Gemeinden', showTable: true, showChart: false, showMatrix: false},
        {title: 'Gemeinden Bern', description: 'Alle Gemeinden im Kanton Bern', showTable: false, showChart: false, showMatrix: true},
        {title: 'Gemeinden Vergleichen', description: 'Verschiedene Gemeinden vergleichen', showTable: false, showChart: true, showMatrix: false}
    ];
}
