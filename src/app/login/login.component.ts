import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../styles.css"]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public userService: UsersService) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    })
  }
}
