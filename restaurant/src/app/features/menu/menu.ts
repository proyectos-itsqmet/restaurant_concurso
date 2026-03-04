import { Component } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Footer } from '../../shared/footer/footer';
import { InputComponent, ButtonComponent, CardComponent } from 'garaq-angular-components';
// import { heroUsers } from '@ng-icons/heroicons/outline';
import { ionAdd } from '@ng-icons/ionicons';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-menu',
  imports: [NavBar, Footer, InputComponent, ButtonComponent, NgIcon, CardComponent],
  viewProviders: [provideIcons({ ionAdd })],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menu: any[] = [
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
    {
      name: 'Arroz relleno',
      description: 'Arroz, pollo, cerdo',
      price: 10,
    },
  ];
}
