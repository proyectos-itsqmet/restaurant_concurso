import { inject, Injectable, signal } from '@angular/core';
import { supabase } from '../../../supabase';
import { User } from '../interface/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<User | null>(null);
  router = inject(Router);

  async signInUser(email: string, password: string): Promise<User> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw new Error(`Error de autenticación: ${error.message}`);

    const { data: dataDb, error: errorDB } = await supabase
      .from('users')
      .select()
      .eq('id', data.user.id)
      .single();

    if (errorDB) throw new Error(`Ocurrió un error inesperado ${errorDB.message}`);

    const newUser: User = {
      id: dataDb.id,
      email: dataDb.email,
      name: dataDb.name,
      role: dataDb.role,
    };
    this.user.set(newUser);

    localStorage.setItem('user', JSON.stringify(this.user));

    alert('Usuario logeado exitosamente');

    this.router.navigate(['/pos']);

    return newUser;
  }

  async registerUser(userLogin: User): Promise<boolean> {
    const { data, error } = await supabase.auth.signUp({
      email: userLogin.email,
      password: userLogin.password!,
    });

    if (error) throw new Error(`Ocurrió un error inesperado ${error.message}`);

    const { data: dataDb, error: errorDB } = await supabase
      .from('users')
      .insert({
        id: data.user?.id,
        email: userLogin.email,
        name: userLogin.name,
        role: 'USER',
      })
      .select();

    if (errorDB) throw new Error(`Ocurrió un error inesperado ${errorDB.message}`);

    const userLogged: User = {
      id: dataDb[0].id,
      email: dataDb[0].email,
      name: dataDb[0].name,
      role: dataDb[0].role,
    };

    this.user.set(userLogged);

    return true;
  }

  async logout() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(`Ocurrió un error inesperado ${error?.message}`);

    this.router.navigate(['/']);
  }
}
