import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title = "Create Credit";
  credit: Credit = new Credit();
  submitBtnTitle = "Create"; 
  actors:  Actor[] = [];
  movies: Movie[] = [];

  constructor(private creditSvc: CreditService, 
              private actorSvc: ActorService,
              private movieSvc: MovieService,                
              private router: Router) { }

  ngOnInit(): void {
    // Due to foreign key constraints, we'll need to get
    // a list of actors and list of movies so user can 
    // select from dropdown boxes in html
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
      },
      err => {
        console.log(err);
      }
    );
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save the credit to the DB
    this.creditSvc.create(this.credit).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit created', this.credit);
        //forward to credit list component
        this.router.navigateByUrl("/credit-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
