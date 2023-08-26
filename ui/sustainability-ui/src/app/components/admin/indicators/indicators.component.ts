import {Component} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {IndicatorService} from "../../../services/indicator.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddIndicatorDialogComponent} from "../add-indicator-dialog/add-indicator-dialog.component";

export interface CountyData {
  id: string;
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
  public displayedColumns: string[] = ['name', 'comment', 'unit', 'topic', 'details'];
  public indicatorData: CountyData[];
  public dataSource: MatTableDataSource<CountyData>;

  constructor(private indicatorService: IndicatorService, public dialog: MatDialog) {
    this.indicatorData = [];
    this.dataSource = new MatTableDataSource<CountyData>([]);
  }

  public openIndicationModal(): void {
    const dialogRef = this.dialog.open(AddIndicatorDialogComponent, {
      data: { name: '', zip: 0},
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (!result) {
        return;
      }

      this.indicatorService.saveIndicator(result).subscribe((next) => {
        this.refreshIndicators();
      });
    });
  }

  private async refreshIndicators(): Promise<void> {
    this.dataSource.data = await firstValueFrom(this.indicatorService.getIndicators());
  }

  async ngOnInit(): Promise<void> {
    this.indicatorData = [];

    const indicators = await firstValueFrom(this.indicatorService.getIndicators());

    indicators.forEach(indicator => {
      this.indicatorData.push({
        id: indicator.id ?? '',
        name: indicator.name ?? '',
        comment: indicator.comment ?? '',
        unit: indicator.unit ?? '',
        topicId: indicator.topicId ?? ''
      });
    });

    this.dataSource.data = this.indicatorData;
  }
}
