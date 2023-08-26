import {Component, Input} from '@angular/core';
import {CountyData} from "../../../models/countyData";

@Component({
  selector: 'app-visualization-table-result',
  templateUrl: './visualization-table-result.component.html',
  styleUrls: ['./visualization-table-result.component.scss']
})
export class VisualizationTableResultComponent {
  @Input()
  data: CountyData[] = [];
  displayedColumns: string[] = ['dimension', 'topic', 'indicator', 'county', 'value'];

  ngOnChanges(changes: any) {
    this.data = changes.data.currentValue;
  }
}
