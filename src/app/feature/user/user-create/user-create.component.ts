import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title = "Create User";
  user: User = new User();
  submitBtnTitle = "Create User";

constructor(private userSvc: UserService,
            private router: Router) { }

ngOnInit(): void {
}
save() {
  //save the user to the DB
  console.log("create new user:", this.user);
  this.userSvc.create(this.user).subscribe(
    resp => {
      this.user = resp as User;
      console.log('User created', this.user);
      
      //forward to user list component
      this.router.navigateByUrl("/user-list");
    },
    err => {
      console.log(err);
    }
  );
}
}