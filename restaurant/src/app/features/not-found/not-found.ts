import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from 'garaq-angular-components';

@Component({
  selector: 'app-not-found',
  imports: [ButtonComponent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private readonly router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
  goBack() {
    history.back();
  }
}
