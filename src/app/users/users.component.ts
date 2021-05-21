import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  data: any;

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.createUser({
      name: 'morpheus',
      job: 'leader',
    });
    this.usersService.editUser({
      name: 'morpheus',
      job: 'zion resident',
    });
    this.usersService.getUsers().subscribe((data) => {
      this.data = data;
    });
    this.usersService.getError().subscribe(
      (data) => {
        console.log('User Login: ' + data.login);
        console.log('Bio: ' + data.bio);
        console.log('Company: ' + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error');
        } else {
          console.log('Server-side error');
        }
      }
    );
  }
}
