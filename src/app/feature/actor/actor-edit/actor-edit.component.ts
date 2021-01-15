import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title = "Actor Edit";
  actor: Actor =  null;
  actorID: number = 0;
  submitBtnTitle = "Save";

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    // get the id from the url  
    this.route.params.subscribe(
      parms => {
        this.actorID = parms['id'];
        console.log(this.actorID);
      }
    );
    // get actor by ID 
    this.actorSvc.getById(this.actorID).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor', this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    //save the edit to the DB
    this.actorSvc.update(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor updated', this.actor);
        //forward to movie list component
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }
}
