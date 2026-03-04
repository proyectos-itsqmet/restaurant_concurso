import { Component, inject } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Footer } from '../../shared/footer/footer';
import {
  CardComponent,
  InputComponent,
  ButtonComponent,
  SelectComponent,
} from 'garaq-angular-components';
import { User } from '../../interface/auth';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-users',
  imports: [NavBar, Footer, CardComponent, InputComponent, ButtonComponent, SelectComponent],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private AuthService = inject(AuthService);

  newUser: User = {
    id: undefined,
    email: '',
    name: '',
    role: '',
    password: 'Itsqmet2026',
  };

  edit: boolean = false;

  protected readonly cargo: CargosOption[] = [
    { label: 'Administrador', value: 'admin' },
    { label: 'Mesero', value: 'USER' },
  ];

  selectCargo: string = '';

  ngOnInit(): void {}

  onRegisterUser() {
    this.AuthService.registerUser(this.newUser)
      .then((res) => {
        console.log('Usuario registrado:', res);
        // this.users.push(res);
        this.resetUser();
      })
      .catch((err) => {
        console.error('Error al registrar usuario:', err);
      });
  }

  users: User[] = [
    {
      id: '1',
      email: 'garaque@yopmail.com',
      name: 'Garaque',
      role: 'admin',
    },
  ];

  resetUser() {
    this.newUser = {
      id: '',
      email: '',
      name: '',
      role: '',
    };
    this.edit = false;
  }
}
