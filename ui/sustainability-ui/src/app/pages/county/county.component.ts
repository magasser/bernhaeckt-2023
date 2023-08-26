import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CountyData } from 'src/app/models/countyData';
import { CountyService } from 'src/app/services/county.service';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'dimension', 'topic', 'value', 'rating', 'source', 'modify'];
  public dataSource: MatTableDataSource<CountyData>;

  private id: string;

  constructor(private countyService: CountyService, private route: ActivatedRoute) {
    this.id = '';
    this.dataSource = new MatTableDataSource<CountyData>();
  }

  public async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';

      if (this.id === '') {
        return;
      }

      const countyData = await firstValueFrom(this.countyService.getCountyData(this.id));

      this.dataSource.data = [new CountyData('id', 'county', 1234, 'test', 'unit', 'topic', 'dimension', 300, 3, 'name')];
  }

  public openAddIndicatorDialog(): void {

  }

  public openCountyIndicatorModifyDialog(): void {
    
  }
}
