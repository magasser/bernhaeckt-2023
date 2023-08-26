import {Component, Input} from '@angular/core';
import {CountyData} from "../../../models/countyData";
import {CountyService} from "../../../services/county.service";
import {ItemType} from "./item-type";

@Component({
  selector: 'app-visualization-row',
  templateUrl: './visualization-row.component.html',
  styleUrls: ['./visualization-row.component.scss']
})
export class VisualizationRowComponent {
  @Input()
  config: any = {};
  ItemType: any = ItemType;


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

  sortByWeight(a: any, b: any) {
    if ( a.weight < b.weight ){
      return -1;
    }
    if ( a.weight > b.weight ){
      return 1;
    }
    return 0;
  }
}
