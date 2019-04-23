import { Injectable } from '@angular/core';
import { IMovie, Movie } from './movies.model';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList: string[] = ['The Lion King', 'Monsters inc', 'Harry Potter And The Goblet Of Fire', 'Interstellar',
    'The Martian', 'Avengers: Endgame', 'Guardians Of The Galaxy', 'Men in black', 'Serenity', 'Forrest Gump'];
  private isDataInitiated = false;

  public moviesDb: IMovie[] = [];

  constructor(private http: HttpClient) {
  }

  public deleteMovie(movie: Movie): void {
    const index = this.moviesDb.indexOf(movie);
    if (index >= 0) {
      this.moviesDb.splice(index, 1);
    }
  }

  public getMovies(): Promise<IMovie[]> {
    if (!this.isDataInitiated) {
      const promiseArr: Promise<any>[] = [];
      for (const movie of this.moviesList) {
        promiseArr.push(this._getMovieInfo(movie));
      }
      this.isDataInitiated = true;

      return Promise.all(promiseArr);
    } else {
      return Promise.resolve([]);
    }
  }

  private _getMovieInfo(title: string): Promise<void> {
    const url = 'http://www.omdbapi.com/';
    const params = new HttpParams()
      .set('apikey', '9fbe3d30')
      .set('t', title);

    return this.http.get(url, {params}).toPromise().then((data: any) => {
      this.moviesDb.push(new Movie(data.Title, data.Title, data.Year, data.Poster, data.imdbID, data.Released,
      data.Actors, data.Director, data.Awards, data.BoxOffice, data.Country, data.Plot, data.Runtime, data.Genre, data.Language));
    });
  }

  public async getMovieById(id: string): Promise<IMovie> {
    if (!this.isDataInitiated) {
      await this.getMovies();
    }
    return this.moviesDb.find(movie => movie.id === id);
  }

}
