import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movies.model';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {
  @Input() public movie: Movie;
  public routerLinkValue: string;

  constructor() { }

  ngOnInit() {
    this.routerLinkValue = '/movie/' + this.movie.id;
  }

}
