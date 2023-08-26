import { Component } from '@angular/core';
import {firstValueFrom} from "rxjs";
import {IndicatorService} from "../../../services/indicator.service";
import {MatTableDataSource} from "@angular/material/table";

export interface CountyData {
  name: string;
  comment: string;
  unit: string;
  topicId: string;
}

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent {
  public displayedColumns: string[] = ['name', 'comment', 'unit', 'topic'];
  public indicatorData: CountyData[];
  public dataSource: MatTableDataSource<CountyData>;

  constructor(private indicatorService: IndicatorService) {
    this.indicatorData = [];
    this.dataSource = new MatTableDataSource<CountyData>([]);
  }

  async ngOnInit(): Promise<void> {
    this.indicatorData = [];

    const indicators = await firstValueFrom(this.indicatorService.getIndicators());

    indicators.forEach(indicator => {
      this.indicatorData.push({
        name: indicator.name,
        comment: indicator.comment,
        unit: indicator.unit,
        topicId: indicator.topicId
      });
    });

    this.dataSource.data = this.indicatorData;
  }
}