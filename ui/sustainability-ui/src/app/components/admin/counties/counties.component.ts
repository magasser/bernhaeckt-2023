import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {firstValueFrom} from 'rxjs';
import {CountyService} from 'src/app/services/county.service';
import {AddCountyDialogComponent} from '../dialogs/add-county-dialog/add-county-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {County} from 'src/app/models/county';

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.scss'],
})
export class CountiesComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'zip', 'details'];
  public dataSource: MatTableDataSource<County>;

  constructor(private countyService: CountyService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<County>([]);
  }

  async ngOnInit(): Promise<void> {
    await this.refreshCounties();
  }

  public async openAddCountyDialog(): Promise<void> {
    const dialogRef = this.dialog.open(AddCountyDialogComponent, {
      data: { name: '', zip: 0},
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (!result) {
        return;
      }

      this.countyService.saveCounty(result).subscribe(
          (next) => this.refreshCounties());
    });
  }

  private async refreshCounties(): Promise<void> {
    this.dataSource.data = await firstValueFrom(this.countyService.getCounties());
  }
}
