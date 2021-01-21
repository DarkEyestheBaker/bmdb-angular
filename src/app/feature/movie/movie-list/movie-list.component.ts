import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { SystemService } from 'src/app/service/system.service';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title ='Movie List';
  movies: Movie[] = [];
  constructor(private movieSvc: MovieService, 
              private sysSrv: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log('movie list - loggedInUser?', this.sysSrv.loggedInUser);
    // populate list of movies
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
        console.log('Movies', this.movies);
      },
      err => {
        console.log(err);
      }
    );

  }

}
