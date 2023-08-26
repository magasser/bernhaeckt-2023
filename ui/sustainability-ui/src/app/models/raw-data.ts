export class RawData {
    id: string;
    indicatorId: string;
    value: number;
    sourceId: string;
    countyId: string;

    constructor(id: string, indicatorId: string, value: number, sourceId: string, countyId: string) {
        this.id = id;
        this.indicatorId = indicatorId;
        this.value = value;
        this.sourceId = sourceId;
        this.countyId = countyId;
    }
}
