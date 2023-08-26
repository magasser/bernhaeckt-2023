export class CountyData {
    data_id: string;
    name: string;
    comment:string;
    unit: string;
    topic: string;
    dimension: string;
    indicator_id: string;
    county_id: string;
    source_id: string;
    county: string;
    zip: number;
    raw_value: number;
    calculated_value: number;
    source_title: string;

    constructor(data_id: string, name: string, comment: string, unit: string, topic: string, dimension: string, indicator_id: string, county_id: string, source_id: string, county: string, zip: number, raw_value: number, calculated_value: number, source_title: string) {
        this.data_id = data_id;
        this.name = name;
        this.comment = comment;
        this.unit = unit;
        this.topic = topic;
        this.dimension = dimension;
        this.indicator_id = indicator_id;
        this.county_id = county_id;
        this.source_id = source_id;
        this.county = county;
        this.zip = zip;
        this.raw_value = raw_value;
        this.calculated_value = calculated_value;
        this.source_title = source_title;
    }
}
