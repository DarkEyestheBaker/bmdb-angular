import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie Detail";
  movie: Movie =  null;
  movieID: number = 0;

constructor(private movieSvc: MovieService, 
            private router: Router, 
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from the url  
    this.route.params.subscribe(
        parms => {this.movieID = parms['id'];
        console.log(this.movieID);
    }
    );
    // get movie by ID 
    this.movieSvc.getById(this.movieID).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie', this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }
  delete() {
    //save the edit to the DB
    this.movieSvc.delete(this.movie.id).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie deleted', this.movie);
        //forward to movie list component
        this.router.navigateByUrl("/movie-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
