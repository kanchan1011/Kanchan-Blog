import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  user?: User;
  //id?:number|undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
  goToUserList() {
    this.router.navigate(['/user-list']);
  }
}
