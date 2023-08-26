import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-visualization-row',
  templateUrl: './visualization-row.component.html',
  styleUrls: ['./visualization-row.component.scss']
})
export class VisualizationRowComponent {
  @Input()
  config: any;
  @Input()
  data: any;
}
