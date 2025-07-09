import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  user!: User | undefined;
  originalUser!: User;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id')!;
    const fetchedUser = this.userService.getUserById(id);

    if (fetchedUser) {
      this.user = JSON.parse(JSON.stringify(fetchedUser));
      this.originalUser = JSON.parse(JSON.stringify(fetchedUser));
    }
  }

  saveUser() {
    if (this.user) {
      this.userService.updateUser(this.user);
      this.router.navigate(['/user-list']);
    }
  }

  onCancel() {
    //reset to original
    this.user = JSON.parse(JSON.stringify(this.originalUser));
    this.router.navigate(['/user-list']);
  }
}
