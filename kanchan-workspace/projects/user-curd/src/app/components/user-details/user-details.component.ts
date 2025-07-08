import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private userService: UserService) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
