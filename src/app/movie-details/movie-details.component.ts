import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movie: Movie;

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieById(id).then(movie => this.movie = movie);
  }

  public deleteMovie() {
    const deleteMsg = 'Are you sure you want to delete?';
    if (window.confirm(deleteMsg)) {
      this.moviesService.deleteMovie(this.movie);
      this.returnToHome();
    }
  }
  public returnToHome() {
    this.router.navigateByUrl('/');
  }
}
