import { Injectable } from '@angular/core';
import { supabase } from '../../../supabase';
import { Menu } from '../interface/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  async getMenu(): Promise<Menu[]> {
    const menu: Menu[] = [];
    const { data, error } = await supabase.from('menu').select();
    if (error) throw new Error(`Ocurrió un error inesperado ${error.message}`);

    for (const element of data) {
      menu.push({
        id: element.id,
        name: element.name,
        description: element.description,
        price: element.price,
      });
    }

    return menu;
  }

  async saveMenu(menu: Menu) {
    const { error } = await supabase.from('menu').insert({
      name: menu.name,
      description: menu.description,
      price: menu.price,
    });

    if (error) alert('Ocurrio un error inesperado');

    alert('Registro exitoso');
  }

  async getItem(id: number): Promise<Menu> {
    const { data, error } = await supabase.from('menu').select().eq('id', id).single();

    if (error) throw new Error(error.message);

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
    };
  }

  async deleteItem(id: number) {
    const { error } = await supabase.from('menu').delete().eq('id', id);
    if (error) throw new Error(error.message);
    alert('Registro eliminado exitosamente');
  }
}
