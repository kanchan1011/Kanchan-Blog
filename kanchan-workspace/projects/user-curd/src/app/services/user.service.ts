import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private storageKey = 'users';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialUsers: User[] = [
        {
          id: 1,
          username: 'John Doe',
          email: 'john@example.com',
          phone: '9888778',
          address: 'pune',
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane@example.com',
          phone: '87384347',
          address: 'chinchwad',
        },
      ];
      this.saveUsers(initialUsers);
    }
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  getUserById(id: number): User | undefined {
    return this.getUsers().find((u) => u.id === id);
  }

  updateUser(user: User) {
    const updatedUser = this.getUsers().map((u) =>
      u.id === user.id ? user : u
    );
    this.saveUsers(updatedUser);
  }

  saveUsers(users: User[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  addUser(newUser: User) {
    const users = this.getUsers();
    const newId =
      users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    newUser.id = newId;
    users.push(newUser);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
