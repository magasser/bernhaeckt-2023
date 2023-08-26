export class County {
  dimension: string;
  topic: string;
  indicator: number;
  value: string;
  rating: string;
  source: string;

  constructor(dimension: string, topic: string, indicator: number, value: string, rating: string, source: string) {
    this.dimension = dimension;
    this.topic = topic;
    this.indicator = indicator;
    this.value = value;
    this.rating = rating;
    this.source = source;
  }
}
