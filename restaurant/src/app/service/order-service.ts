import { Injectable } from '@angular/core';
import {Order} from '../interface/order';
import {supabase} from '../../../supabase';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
    async getMenu(): Promise<Order[]> {
      const items: Order[] = [];
      const { data, error } = await supabase.from('order').select();
      if (error) throw new Error(`Ocurrió un error inesperado ${error.message}`);
  
      for (const element of data) {
        items.push({
          id: element.id,
          tableNumber: element.table_number,
          total: element.total,
          iva: element.iva,
          createdAt: element.created_at,
        });
      }
  
      return items;
    }
  
    async saveMenu(order: Order) {
      const { error } = await supabase.from('orders').insert({
        table_number: order.tableNumber,
        total: order.total,
        iva: order.iva,
      });
  
      if (error) alert('Ocurrio un error inesperado');
  
      alert('Registro exitoso');
    }
  
    async getItem(id: number): Promise<Order> {
      const { data, error } = await supabase.from('orders').select().eq('id', id).single();
  
      if (error) throw new Error(error.message);
  
      return {
        id: data.id,
        tableNumber: data.table_number,
        total: data.total,
        iva: data.iva,
        createdAt: data.created_at,
      };
    }
  
    async deleteItem(id: number) {
      const { error } = await supabase.from('orders').delete().eq('id', id);
      if (error) throw new Error(error.message);
      alert('Registro eliminado exitosamente');
    }
}
