export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;

    //only ONE constructor in javascript
    constructor(id: number = 0, 
        firstName: string = '', 
        lastName: string = '', 
        gender: string = '', 
        birthDate: Date = null)
    {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthDate = birthDate;
    }
}