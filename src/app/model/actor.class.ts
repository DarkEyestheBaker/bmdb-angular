export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;

    //only ONE constructor in javascript
    constructor(id: number = 0, firstName = '', lastName = '', gender = '', birthDate = '')
    {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthDate = birthDate;
    }
}