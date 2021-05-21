import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    token: any;
  constructor() { }

  isLogged(){
    return this.token;
  }
}
