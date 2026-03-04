import { Component } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-order',
  imports: [NavBar, Footer],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {}
