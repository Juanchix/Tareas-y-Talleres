export class Series {
    id: number; 
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    cover: string;

    
    constructor(id:number, name:string, channel:string, seasons:number, description:string, link:string, cover:string) {
        this.id = id;
        this.name = name;
        this.channel = channel; 
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.cover = cover;
    }
}