export interface IMovie {
    originalName: string;
    assignedName: string;
    year: number;
    imgUrl: string;
    id: string;
    released: string;
    actors: string;
    director: string;
    awards: string;
    boxOffice: string;
    country: string;
    plot: string;
    runtime: string;
    genre: string;
    language: string;
}
export class Movie implements IMovie {
    public originalName: string;
    public assignedName: string;
    public year: number;
    public imgUrl: string;
    public id: string;
    public released: string;
    public actors: string;
    public director: string;
    public awards: string;
    public boxOffice: string;
    public country: string;
    public plot: string;
    public runtime: string;
    public genre: string;
    public language: string;
    constructor(originalName: string, assignedName: string, year: number, imgUrl: string, id: string, released: string,
        actors: string, director: string, awards: string, boxOffice: string, country: string, plot: string, runtime: string,
        genre: string, language: string) {
        this.originalName = originalName;
        this.assignedName = assignedName;
        this.year = year;
        this.imgUrl = imgUrl;
        this.id = id;
        this.released = released;
        this.actors = actors;
        this.director = director;
        this.awards = awards;
        this.boxOffice = boxOffice;
        this.country = country;
        this.plot = plot;
        this.runtime = runtime;
        this.genre = genre;
        this.language = language;
    }
}
