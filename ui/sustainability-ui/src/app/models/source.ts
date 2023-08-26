export class Source {
    id: string;
    url: string;
    api_url: string;
    title: string;

    constructor(id: string, url: string, api_url: string, title: string) {
        this.id = id;
        this.url = url;
        this.api_url = api_url;
        this.title = title;
    }
}
