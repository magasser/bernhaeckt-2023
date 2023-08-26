import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { CountyService } from 'src/app/services/county.service';
import { AddCountyDialogComponent } from '../add-county-dialog/add-county-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

export interface CountyData {
  id: string;
  name: string;
  zip: number;
  url: string;
}

@Component({
  selector: 'app-counties',
  templateUrl: './counties.component.html',
  styleUrls: ['./counties.component.scss'],
})
export class CountiesComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'zip', 'details'];
  public countyData: CountyData[];
  public dataSource: MatTableDataSource<CountyData>;

  constructor(private countyService: CountyService, public dialog: MatDialog) {
    this.countyData = [];
    this.dataSource = new MatTableDataSource<CountyData>();
  }

  async ngOnInit(): Promise<void> {
    this.countyData = [];

    const counties = await firstValueFrom(this.countyService.getCounties());

    counties.forEach(county => {
      this.countyData.push({id: county.id, name: county.name, zip: county.zip, url: `/admin/county/${county.id}`});
    });

    this.dataSource.data = this.countyData;
  }

  public openAddCountyDialog(): void {
    const dialogRef = this.dialog.open(AddCountyDialogComponent, {
      data: { name: '', zip: 0},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      console.log(result);
    })
  }
}
