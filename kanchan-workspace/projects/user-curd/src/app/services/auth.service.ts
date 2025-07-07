import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem('auth_token', 'dummy-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
