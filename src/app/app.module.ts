import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridCardComponent } from './grid-view/components/grid-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GridViewComponent } from './grid-view/grid-view.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    GridCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClient, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
