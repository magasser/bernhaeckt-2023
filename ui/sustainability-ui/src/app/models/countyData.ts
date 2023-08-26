export class CountyData {
    id: string;
    county: string;
    zip: number;
    comment: string;
    unit: string;
    topic: string;
    dimension: string;
    raw_value: number;
    calculated_value: number;


    constructor(id: string, county: string, zip: number, comment: string, unit: string, topic: string, dimension: string, raw_value: number, calculated_value: number) {
        this.id = id;
        this.county = county;
        this.zip = zip;
        this.comment = comment;
        this.unit = unit;
        this.topic = topic;
        this.dimension = dimension;
        this.raw_value = raw_value;
        this.calculated_value = calculated_value;
    }
}
