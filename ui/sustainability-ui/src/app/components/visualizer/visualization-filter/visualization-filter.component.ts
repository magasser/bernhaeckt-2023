import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CountyData} from "../../../models/countyData";
import {FormControl, FormGroup} from '@angular/forms';
import {CountyService} from "../../../services/county.service";
import {map, Observable, startWith} from "rxjs";

@Component({
    selector: 'app-visualization-filter',
    templateUrl: './visualization-filter.component.html',
    styleUrls: ['./visualization-filter.component.scss'],
})
export class VisualizationFilterComponent {
    counties: FormControl = new FormControl([]);
    dimensions: FormControl = new FormControl([]);
    topics: FormControl = new FormControl([]);
    indicators: FormControl = new FormControl([]);

    topicList: any = [];
    dimensionList: any = [];
    countyList: any = [];
    indicatorList: any = [];

    @Output() filterDataEvent = new EventEmitter<CountyData[]>();


    constructor(private countyService: CountyService) {
    }

    data: CountyData[] = [];

    ngOnInit() {
        this.loadData();
    }

    updateFilter() {
        let filteredData = [...this.data];
        if (this.counties.value.length !== 0) {
            filteredData = filteredData.filter((entry) => this.counties.value?.includes(entry.county));
        }
        if (this.dimensions.value.length !== 0) {
            filteredData = filteredData.filter((entry) => this.dimensions.value?.includes(entry.dimension));
        }
        if (this.topics.value.length !== 0) {
            filteredData = filteredData.filter((entry) => this.topics.value?.includes(entry.topic));
        }
        if (this.indicators.value.length !== 0) {
            filteredData = filteredData.filter((entry) => this.indicators.value?.includes(entry.name));
        }
        console.log(filteredData)
        this.filterDataEvent.emit(filteredData);
    }

    loadData() {
        this.countyService.getCountiesData().subscribe(next => {
                this.data = next;

                this.topicList = this.uniquify(this.data.map((countyData) => countyData.topic));
                this.dimensionList = this.uniquify(this.data.map((countyData) => countyData.dimension));
                this.countyList = this.uniquify(this.data.map((countyData) => countyData.county));
                this.indicatorList = this.uniquify(this.data.map((countyData) => countyData.name));

            }
        )
    }

    uniquify(input: any) {
        return [...new Set(input)]
    }
}
