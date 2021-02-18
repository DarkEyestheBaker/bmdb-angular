import { Actor } from "./actor.class";
import { Movie } from "./movie.class";

export class Credit {
    id: number;
    actor: Actor;
    movie: Movie;
    role: string;
    //actorName and movieTitle are derived fields from actor (last name and first name) & movie title
    actorName: string;
    movieTitle: string;

    //only ONE constructor in javascript
    constructor(id: number = 0, 
                actor: Actor = new Actor, 
                movie: Movie = new Movie, 
                role: string = '')
    {
        this.id = id;
        this.actor = actor;
        this.movie = movie;
        this.role = role;
   
    }
}