import {Component, Input, OnChanges} from '@angular/core';
import {CountyData} from "../../../models/countyData";
import {Indicator} from "../../../models/indicator";

@Component({
  selector: 'app-visualization-chart-result',
  templateUrl: './visualization-chart-result.component.html',
  styleUrls: ['./visualization-chart-result.component.scss']
})
export class VisualizationChartResultComponent implements OnChanges{
  @Input()
  data: any;

  calculatedData: any = [];
  colors = ['blue','red','orange','green','purple','black']

  ngOnChanges(changes: any) {
    let labels: string[] = [];
    if(changes.data.currentValue.length !== 0) {
      let counties: Set<string> = new Set;
      changes.data.currentValue.forEach((el: any) => {
        labels.push(el.name);
        counties.add(el.county)
      });

      this.data = {
        labels: [...new Set(labels)],
        datasets: [

        ]
      }
      let counter = -1;
      counties.forEach(county => {
        let values: any = []
        changes.data.currentValue.forEach((el: any) => {
          if(el.county === county) {
            values.push(el.calculated_value);
          }
        });
        counter++;
        this.data.datasets.push({
          label: county,
          data: values,
          borderColor: this.colors[counter],
          backgroundColor: 'transparent',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'lightgreen',
        })
      });
    }
  }

  getEveryLabelOnce = (labels: string[]): string[] => {

    return []
  }
}
