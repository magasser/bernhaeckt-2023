export class Indicator {
  id: string;
  name: string;
  comment: string;
  unit: string;
  topicId: string;

  constructor(id: string, name: string, comment: string, unit: string, topicId: string) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.unit = unit;
    this.topicId = topicId;
  }
}
