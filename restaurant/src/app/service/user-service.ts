import { Injectable } from '@angular/core';
import { User } from '../interface/auth';
import { supabase } from '../../../supabase';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  async getUsers(): Promise<User[]> {
    const users: User[] = [];
    const { data, error } = await supabase.from('users').select();

    if (error) throw new Error(error.message);

    for (const element of data) {
      users.push({
        email: element.email,
        name: element.name,
        role: element.role,
        id: element.id,
      });
    }

    return users;
  }

  async updateUser(user: User) {
    const { error } = await supabase
      .from('users')
      .update({
        email: user.email,
        name: user.name,
        role: user.role,
      })
      .eq('id', user.id);

    if (error) throw new Error(`Ocurrio un error inesperado> ${error.message}`);

    alert('El usuario se ha actualizado con éxito');

    return true;
  }
}
