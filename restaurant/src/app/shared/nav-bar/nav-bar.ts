import { Component, signal } from '@angular/core';
import { ButtonComponent } from 'garaq-angular-components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  protected readonly menuOpen = signal(false);
}
