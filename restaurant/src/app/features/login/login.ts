import { Component, computed, inject, signal } from '@angular/core';
import { ButtonComponent, InputComponent, SpinnerComponent } from 'garaq-angular-components';
import { RouterLink } from '@angular/router';
import {AuthService} from '../../service/auth-service';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, InputComponent, RouterLink, SpinnerComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly showPassword = signal(false);
  protected readonly rememberMe = signal(false);
  protected readonly loading = signal(false);
  protected readonly submitAttempted = signal(false);
  protected readonly submittedData = signal<LoginData | null>(null);

  protected readonly emailInvalid = computed(() => this.submitAttempted() && !this.email().trim());
  protected readonly passwordInvalid = computed(() => this.submitAttempted() && !this.password());

  private authService = inject(AuthService);

  protected onLogin(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.email().trim() || !this.password()) return;

    this.loading.set(true);

    this.authService.signInUser(this.email(), this.password());
  }
}
