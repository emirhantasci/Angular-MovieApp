import { Injectable } from '@angular/core';
import { Movies } from './movies/movie.datasource';
import { Movie } from './movies/movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //service ulaşılabilirliğidir
})
export class MovieService {
  private apiMoviesUrl = 'api/movies';

  constructor(private loggingService: LoggingService, private http:HttpClient) { 

  }

  getMovies():Observable<Movie[]>{
    
    this.loggingService.add('MovieService: listing movies');
    //return of(Movies);
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: string | number):Observable<Movie>{
    this.loggingService.add('MovieService: get movie detail by id='+id);
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);
  }

  update(movie:Movie):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.loggingService.add('Movie updated: ' + movie.name);
    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }

  add(movie:Movie):Observable<Movie>{
    this.loggingService.add('New movie: ' + movie.name);
    return this.http.post<Movie>(this.apiMoviesUrl, movie);
    
  }

  delete(movie:Movie):Observable<Movie>{
    this.loggingService.add('Deleted movie: ' +movie.name);
    return this.http.delete<Movie>(this.apiMoviesUrl+'/'+movie.id);
  }
}