export class Indicator {
  name: string;
  comment: string;
  unit: string;
  topicId: string;

  constructor(name: string, comment: string, unit: string, topicId: string) {
    this.name = name;
    this.comment = comment;
    this.unit = unit;
    this.topicId = topicId;
  }
}
