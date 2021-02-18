import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title = "Actor Detail";
  actor: Actor =  null;
  actorID: number = 0;
  msg: string = "";

constructor(private actorSvc: ActorService, 
            private router: Router, 
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the ID from the URL  
    this.route.params.subscribe(
        parms => {this.actorID = parms['id'];
        console.log("ActorID: " + this.actorID);
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
  delete() {
    //save the edit to the DB
    this.actorSvc.delete(this.actor.id).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor deleted', this.actor);
        //forward to actor list component
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
        this.msg = "Server Error - DELETE actor for id: " + this.actorID;
      }
    );
  }
}