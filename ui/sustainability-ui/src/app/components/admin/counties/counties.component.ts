import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, firstValueFrom } from 'rxjs';
import { County } from 'src/app/models/county';
import { CountyService } from 'src/app/services/county.service';

export interface CountyData {
  id: string;
  name: string;
  zip: number;
  url: string;
}

const TEST: CountyData[] = [
  {id: 'test', name: 'county', zip: 1234, url: 'asdfs'}
];

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.scss']
})
export class CountiesComponent /*implements OnInit*/ {
  public dataSource = [...TEST];

  private countyData: CountyData[];

  constructor(private countyService: CountyService) {
    this.countyData = [];
    //this.dataSource = [{id: 'test', name: 'county', zip: 1234, url: 'asdfs'}];
  }

  /*async ngOnInit(): Promise<void> {
    this.countyData = [];

    const counties = await firstValueFrom(this.countyService.getCounties());

    counties.forEach(county => {
      this.countyData.push({id: county.id, name: county.name, zip: county.zip, url: `/admin/county/${county.id}`});
    });

    //this.dataSource.setData(this.countyData);
  }*/
}
