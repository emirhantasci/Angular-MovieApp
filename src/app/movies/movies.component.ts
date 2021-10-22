import { Component } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "./movie";
@Component({
    selector: 'movies', //<movies></movies>
    //template: `<h2>movies</h2><div> {{movie.id}}</div><div>{{movie.name}}</div>`,
    templateUrl: 'movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    title = "Film Listesi";
    movies: Movie[] = [];
    selectedMovie!: Movie;

    constructor(private movieService: MovieService) {

    }

    ngOnInit(): void {
        //Constructor'dan sonra çalışır.
        this.getMovies();

    }

    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    add(name:string, imageUrl:string, description:string):void{
        console.log(name);
        console.log(imageUrl);
        console.log(description);
        this.movieService.add({name, imageUrl, description} as Movie).subscribe(movie=>this.movies.push(movie));
    }

    delete(movie:Movie):void{
        this.movies=this.movies.filter(m=>m!==movie)
        this.movieService.delete(movie).subscribe();
    }
}