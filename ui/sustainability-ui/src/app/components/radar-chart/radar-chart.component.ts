import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent {

  @Input()
  data = {};
  options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      min: 0,
      max: 10,
    }
  }

}
