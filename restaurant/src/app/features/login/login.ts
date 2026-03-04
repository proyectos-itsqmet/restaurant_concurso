import { Component, computed, signal } from '@angular/core';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
  CheckboxComponent,
  SpinnerComponent,
  SeparatorComponent,
} from 'garaq-angular-components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ButtonComponent,
    CardComponent,
    InputComponent,
    RouterLink,
    CheckboxComponent,
    SpinnerComponent,
    SeparatorComponent,
  ],
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

  protected onLogin(): void {
    if (this.loading()) return;
    this.submitAttempted.set(true);
    if (!this.email().trim() || !this.password()) return;

    this.loading.set(true);
    // Simular llamada al servidor
    setTimeout(() => {
      this.loading.set(false);
      this.submittedData.set({ email: this.email(), rememberMe: this.rememberMe() });
    }, 1200);
  }
}
