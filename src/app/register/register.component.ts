import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["../styles.css"]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  msg: string = '';

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = { email: this.email, password: this.password };
    if (this.password !== this.confirmPassword){
      this.message('Los campos password no coinciden');
      return;
    }
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/login');
    }, error => {
      this.message(error.error.error);
    });
  }
  private message(msg: string): void {
    this.msg = msg;
    setTimeout(() => {
      this.msg = '';
    },3000);
  }
}
