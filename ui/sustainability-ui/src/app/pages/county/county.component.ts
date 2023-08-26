import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AddIndicatorDataDialogComponent } from 'src/app/components/admin/dialogs/add-indicator-data-dialog/add-indicator-data-dialog.component';
import { CountyIndicatorModifyDialogComponent } from 'src/app/components/admin/dialogs/county-indicator-modify-dialog/county-indicator-modify-dialog.component';
import { CountyData } from 'src/app/models/countyData';
import { Indicator } from 'src/app/models/indicator';
import { RawData } from 'src/app/models/raw-data';
import { Source } from 'src/app/models/source';
import { CountyService } from 'src/app/services/county.service';
import { IndicatorService } from 'src/app/services/indicator.service';
import { RawDataService } from 'src/app/services/raw-data.service';
import { SourceService } from 'src/app/services/source.service';

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.scss']
})
export class CountyComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'dimension', 'topic', 'value', 'rating', 'source', 'modify'];
  public dataSource: MatTableDataSource<CountyData>;

  private id: string;
  private sources: Source[];
  private indicators: Indicator[];

  constructor(private countyService: CountyService, private indicatorService: IndicatorService, private sourceService: SourceService, private rawDataService: RawDataService, private route: ActivatedRoute, public dialog: MatDialog) {
    this.id = '';
    this.dataSource = new MatTableDataSource<CountyData>([]);
    this.indicators = [];
    this.sources = [];
  }

  public async ngOnInit(): Promise<void> {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';

      this.indicators = await firstValueFrom(this.indicatorService.getIndicators());
      this.sources = await firstValueFrom(this.sourceService.getSources());

      await this.refreshCountyData();
  }

  public async openAddIndicatorDialog(): Promise<void> {
    const dialogRef = this.dialog.open(AddIndicatorDataDialogComponent, {
      data: { indicators: this.indicators, indicator: null, sources: this.sources, source: null, value: 0 }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (!result) {
        return;
      }

      const rawData = new RawData('', result.indicator?.id, result.value, result.source?.id, this.id);

      this.rawDataService.saveRawData(rawData).subscribe((next) => {
        this.refreshCountyData();
      });
    });
  }

  public openCountyIndicatorModifyDialog(data: CountyData): void {
    const dialogRef = this.dialog.open(CountyIndicatorModifyDialogComponent, {
      data: { value: data.raw_value, sources: this.sources, source: null }
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (!result) {
        return;
      }

      data.raw_value = result.value;
      data.source_id = result.source?.id;
      data.source_title = result.source?.title;

      this.countyService.updateCountyData(data).subscribe(
          (next) => this.refreshCountyData());
    });
  }

  private async refreshCountyData(): Promise<void> {
    if (this.id === '') {
      return;
    }

    this.dataSource.data = await firstValueFrom(this.countyService.getCountyData(this.id));
  }
}
