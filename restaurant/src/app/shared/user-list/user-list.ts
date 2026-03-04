import { Component, inject, signal } from '@angular/core';

import { CardComponent, ButtonComponent } from 'garaq-angular-components';
import { UserService } from '../../service/user-service';
import { User } from '../../interface/auth';

@Component({
  selector: 'app-user-list',
  imports: [CardComponent, ButtonComponent],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  private userService = inject(UserService);
  users = signal<User[]>([]);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService
      .getUsers()
      .then((res) => {
        this.users.set(res);
      })
      .catch((err) => {
        console.error('Error al obtener usuarios:', err);
      });
  }
}
