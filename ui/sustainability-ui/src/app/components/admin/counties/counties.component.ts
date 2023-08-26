import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { CountyService } from 'src/app/services/county.service';
import { AddCountyDialogComponent } from '../add-county-dialog/add-county-dialog.component';

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

  constructor(private countyService: CountyService, public dialog: MatDialog) {
    this.countyData = [];
  }

  async ngOnInit(): Promise<void> {
    this.countyData = [];

    const counties = await firstValueFrom(this.countyService.getCounties());

    counties.forEach(county => {
      this.countyData.push({id: county.id, name: county.name, zip: county.zip, url: `/admin/county/${county.id}`});
    });
  }

  public openAddCountyDialog(): void {
    const dialogRef = this.dialog.open(AddCountyDialogComponent, {
      data: { name: '', zip: 0},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
