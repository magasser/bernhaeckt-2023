import { Component } from '@angular/core';
import {CountyService} from "../../../services/county.service";
import {firstValueFrom} from "rxjs";
import {IndicatorService} from "../../../services/indicator.service";
export interface Indicator {
  dimension: string;
  topic: string;
  indicator: number;
  value: string;
  rating: string;
  source: string;
}

const TEST: Indicator[] = [
  {dimension: 'test', topic: 'county', indicator: 1234, value: 'asdfs', rating: '1', source: 'google.com'}
];
@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent {
  public displayedColumns: string[] = ['dimension', 'topic', 'indicator', 'value', 'rating', 'source'];
  public indicatorData: Indicator[];

  constructor(private indicatorService: IndicatorService) {
    this.indicatorData = [];
  }

  async ngOnInit(): Promise<void> {
    this.indicatorData = [];

    const indicators = await firstValueFrom(this.indicatorService.getIndicators());

    indicators.forEach(indicator => {
      this.indicatorData.push({
        dimension: indicator.dimension,
        topic: indicator.topic,
        indicator: indicator.indicator,
        value: indicator.value,
        rating: indicator.rating,
        source: indicator.source
      });
    });
  }
}
