import {Component, Input} from '@angular/core';
import {CountyData} from "../../../models/countyData";

@Component({
    selector: 'app-visualization-table-matrix-result',
    templateUrl: './visualization-table-matrix-result.component.html',
    styleUrls: ['./visualization-table-matrix-result.component.scss']
})
export class VisualizationTableMatrixResultComponent {
    @Input()
    data: CountyData[] = [];
    displayedColumns: any = ['Indikator'];
    calculatedData: any = [];

    ngOnChanges(changes: any) {
        this.data = changes.data.currentValue
        this.calculatedData = this.data.reduce((accumulator: Map<String, any>, currentValue: CountyData) => {
            if (accumulator.has(currentValue.name)) {
                accumulator.get(currentValue.name)[currentValue.county] = currentValue.calculated_value;
            } else {
                accumulator.set(currentValue.name, {Indikator: currentValue.name, [currentValue.county]: currentValue.calculated_value});
            }
            return accumulator;
        }, new Map<string, any>());
        this.calculatedData = [...this.calculatedData.values()];
        this.displayedColumns = this.uniquify(this.calculatedData.flatMap((entry: any) => Object.keys(entry)));
    }

    uniquify(input: any) {
        return [...new Set(input)]
    }
}
