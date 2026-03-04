import { Component, inject, signal } from '@angular/core';

import { CardComponent, ButtonComponent } from 'garaq-angular-components';
import { OrderService } from '../../service/order-service';
import { OrderData } from '../../interface/order';

@Component({
  selector: 'app-order-list',
  imports: [CardComponent, ButtonComponent],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList {
  private orderService = inject(OrderService);
  orders = signal<OrderData[]>([]);

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService
      .getOrders()
      .then((res) => {
        this.orders.set(res);
      })
      .catch((err) => {
        console.error('Error al obtener órdenes:', err);
      });
  }
}
