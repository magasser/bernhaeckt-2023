import { Component } from '@angular/core';
import {CountyService} from "../../../services/county.service";
import {firstValueFrom} from "rxjs";
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

  constructor(private countyService: CountyService) {
    this.indicatorData = [];
  }

  async ngOnInit(): Promise<void> {
    this.indicatorData = [];

    const counties = await firstValueFrom(this.countyService.getCounties());

    counties.forEach(county => {
      this.indicatorData.push({
        dimension: county.id,
        topic: county.name,
        indicator: county.zip,
        value: county.name,
        rating: '1',
        source: 'google.com'
      });
    });
  }
}
