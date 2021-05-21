import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router"
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../styles.css"]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  msg: string = '';

  constructor(public userService: UsersService, public router: Router, public navBar: NavbarComponent) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error);
        this.message(error.error.error)
    });
  }

  private message(msg: string): void {
    this.msg = msg;
    setTimeout(() => {
      this.msg = '';
    },3000);
  }
}
