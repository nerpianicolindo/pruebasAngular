import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    //this.http.get('https://reqres.in/api/users?page=2');
  }

  login(user: any): Observable<any> {
    return this.http.post('https://reqres.in/api/login', user);
  }

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  createUser(user: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users', user);
  }

  editUser(user: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users/2', user)
  }

  deleteUser(): Observable<any>{
    return this.http.delete('https://reqres.in/api/users/2');
  }

  getError(): Observable<any>{
    return this.http.get("https://api.github.com/users/seeschweiler");
  }

}
