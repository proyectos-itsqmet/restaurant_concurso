import { Injectable } from '@angular/core';
import { OrderData } from '../interface/order';
import { supabase } from '../../../supabase';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  async getOrders(): Promise<OrderData[]> {
    const orders: OrderData[] = [];
    const { data, error } = await supabase.from('orders').select();

    if (error) throw new Error(error.message);

    for (const element of data) {
      orders.push({
        id: element.id,
        tableNumber: element.table_number,
        total: element.total,
        iva: element.iva,
        createdAt: element.created_at,
      });
    }

    return orders;
  }

  async createOrder(order: OrderData): Promise<boolean> {
    const { error } = await supabase.from('orders').insert({
      table_number: order.tableNumber,
      total: order.total,
      iva: order.iva,
    });

    if (error) throw new Error(`Ocurrió un error inesperado: ${error.message}`);

    return true;
  }
}
