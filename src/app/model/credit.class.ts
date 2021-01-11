export class Credit {

    id: number;
    actor: string;
    movie: string;
    role: string;

    constructor(id: number = 0, actor: string = '', movie: string = '', role: string = '')
    {
        this.id = id;
        this.actor = actor;
        this.movie = movie;
        this.role = role;
    }
}