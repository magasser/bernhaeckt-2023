import {Component} from '@angular/core';
import {CountyService} from "../../services/county.service";
import {CountyData} from "../../models/countyData";

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
        {title: 'Alle Gemeinden'},
        {title: 'Gemeinden Bern', description: 'Alle Gemeinden im Kanton Bern'}
    ];
}
