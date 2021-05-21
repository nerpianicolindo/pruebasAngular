import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user : any;
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.user = '';
  }

  logOut() {
    this.user = null;
  }
}
