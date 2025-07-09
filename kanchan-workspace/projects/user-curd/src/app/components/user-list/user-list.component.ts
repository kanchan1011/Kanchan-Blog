import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  //isLogin:boolean=false;
  users: User[] = [];
  headers: string[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.headers = Object.keys(this.users[0]);
    console.log(this.headers);
  }

  viewUser(id: number) {
    this.router.navigate(['/user-detail', id]);
  }
  editUser(id: number) {
    this.router.navigate(['/user-edit', id]);
  }

  addUser() {
    this.router.navigate(['/user-add']);
  }
}
