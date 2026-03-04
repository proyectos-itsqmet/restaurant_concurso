import { Component } from '@angular/core';
import { Footer } from '../../shared/footer/footer';
import { NavBar } from '../../shared/nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  imports: [Footer, NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
