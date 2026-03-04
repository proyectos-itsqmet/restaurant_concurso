import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
import { UserList } from '../../shared/user-list/user-list';

@Component({
  selector: 'app-users',
  imports: [
    NavBar,
    Footer,
    CardComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    UserList,
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private cdr = inject(ChangeDetectorRef);

  private authService = inject(AuthService);

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

  onRegisterUser() {
    this.authService
      .registerUser(this.newUser)
      .then((res) => {
        console.log('Usuario registrado:', res);
        // this.users.push(res);
        this.resetUser();
        this.cdr.detectChanges();
      })
      .catch((err) => {
        console.error('Error al registrar usuario:', err);
      });
  }

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
