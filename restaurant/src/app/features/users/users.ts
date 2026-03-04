import { Component } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Footer } from '../../shared/footer/footer';
import {
  CardComponent,
  InputComponent,
  ButtonComponent,
  SelectComponent,
} from 'garaq-angular-components';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-users',
  imports: [
    NavBar,
    Footer,
    CardComponent,
    InputComponent,
    ButtonComponent,
    NgIcon,
    SelectComponent,
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  cargo: any[] = [
    {
      name: 'Administrador',
      value: 'ADMIN',
    },
    { name: 'Mesero', value: 'USER' },
  ];

  selectCargo: string = '';
}
