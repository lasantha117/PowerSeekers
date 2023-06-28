import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public login(username: string, password: string): void {
    // perform login logic and store the token in localStorage
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
