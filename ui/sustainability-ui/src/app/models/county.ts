export class County {
    id: string;
    name: string;
    zip: number;

    constructor(id: string, name: string, zip: number) {
        this.id = id;
        this.name = name;
        this.zip = zip;
    }
}
