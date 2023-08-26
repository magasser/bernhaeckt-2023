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

  ngOnChanges(changes: any) {
    let labels: string[] = [];
    let values: [] = [];
    if(changes.data.currentValue.length !== 0) {
      console.log(changes.data);
      changes.data.currentValue.forEach((el: any) => {
        labels.push(el.name)
      })

      this.data = {
        labels: [...new Set(labels)],
        datasets: [
          {
            label: 'Single Dataset',
            data: [5,2,3,4],
            backgroundColor: 'transparent',
            borderColor: 'blue',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'lightgreen',
          },
          {
            label: 'Single Dataset',
            data: [4,5,6,7],
            backgroundColor: 'transparent',
            borderColor: 'red',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'lightgreen',
          },
          {
            label: 'Single Dataset',
            data: [7,8,9,3],
            backgroundColor: 'transparent',
            borderColor: 'green',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'lightgreen',
          }
        ]
        //this.data = changes.data.currentValue;
      }
    }


  }

  getEveryLabelOnce = (labels: string[]): string[] => {

    return []
  }
}
