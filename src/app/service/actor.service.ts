import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor} from '../model/actor.class';

constr URL = 'http://localhost:8080/actors';

@Injectable({
    providedIn: 'root'
})
export class ActorService {

    constructor(private http: HttpClient) {}

    //service functions
    //getAll actors
    getAll(): Observable<Actor[]> {
        console.log("actorSvc.getAll()..."+URL);
        return this.http.get(URL+'/') as Observable<Actor[]>;
    }
}