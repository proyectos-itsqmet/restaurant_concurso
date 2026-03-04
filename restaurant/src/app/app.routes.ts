import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { Home } from './features/home/home';
import { Users } from './features/users/users';
import { Menu } from './features/menu/menu';
import { Order } from './features/order/order';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'pos',
    component: Home,
  },
  {
    path: 'users',
    component: Users,
  },
  {
    path: 'menu',
    component: Menu,
  },
  {
    path: 'order',
    component: Order,
  },
  {
    path: '**',
    component: NotFound,
  },
];
