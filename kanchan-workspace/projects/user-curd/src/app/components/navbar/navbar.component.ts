import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogin: boolean = false;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    const authToken = localStorage.getItem('auth_token');
    //const loginData = localStorage.getItem('login-data');
    console.log(authToken);
    this.isLogin = this.authService.isLoggedIn();
    console.log('isLogin: ', this.isLogin);
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
  }
}
