import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-add',
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  user: User = {
    id: 0,
    username: '',
    email: '',
    phone: '',
    address: '',
  };
  
  constructor(private router: Router, private userService: UserService) {}

  addUser() {
    this.userService.addUser(this.user);
    this.router.navigate(['/user-list']);
  }
  onCancel() {
    this.router.navigate(['/user-list']);
  }
}
