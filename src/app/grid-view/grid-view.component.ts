import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  title = 'cloudinary-app';

  constructor(public moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMovies();
  }

}
