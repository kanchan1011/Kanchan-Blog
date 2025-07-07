import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isLogin: boolean = false;

  constructor() {}
  ngOnInit() {
    const authToken = localStorage.getItem('auth_token');
    //const loginData = localStorage.getItem('login-data');
    console.log(authToken);
  }
}
