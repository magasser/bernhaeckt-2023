import {Component, Input} from '@angular/core';
import {CountyData} from "../../../models/countyData";
import {CountyService} from "../../../services/county.service";

@Component({
  selector: 'app-visualization-row',
  templateUrl: './visualization-row.component.html',
  styleUrls: ['./visualization-row.component.scss']
})
export class VisualizationRowComponent {
  @Input()
  config: any = {};


  constructor(private countyService: CountyService) {
  }

  data: CountyData[] = [];
  filteredData: CountyData[] = [];


  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.countyService.getCountiesData().subscribe(next => {
          this.data = next;
          this.filteredData = this.data;
        }
    )
  }

  updateFilteredData(event: CountyData[]) {
    this.filteredData = event
  }
}
