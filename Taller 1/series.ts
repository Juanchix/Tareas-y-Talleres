export class Serie {
    id: number; 
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    cover: string;
    
    constructor(_id: number, _name: string, _channel: string, _seasons: number, _description: string, _link: string, _cover: string) {
        this._id = _id;
        this._name = _name;
        this._channel = _channel; 
        this._seasons = _seasons;
        this._description = _description;
        this._link = _link;
        this._cover = _cover;
    }