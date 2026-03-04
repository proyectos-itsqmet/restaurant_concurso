import { Component, inject } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { Footer } from '../../shared/footer/footer';
import {
  CardComponent,
  InputComponent,
  ButtonComponent,
} from 'garaq-angular-components';
import { OrderService } from '../../service/order-service';
import { OrderData } from '../../interface/order';
import { OrderList } from '../../shared/order-list/order-list';

@Component({
  selector: 'app-order',
  imports: [NavBar, Footer, CardComponent, InputComponent, ButtonComponent, OrderList],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  private orderService = inject(OrderService);

  newOrder: OrderData = {
    tableNumber: 0,
    total: 0,
    iva: 15,
    createdAt: '',
  };

  onCreateOrder() {
    this.orderService
      .createOrder(this.newOrder)
      .then(() => {
        alert('Orden creada con éxito');
        this.resetOrder();
      })
      .catch((err) => {
        console.error('Error al crear orden:', err);
      });
  }

  resetOrder() {
    this.newOrder = {
      tableNumber: 0,
      total: 0,
      iva: 15,
      createdAt: '',
    };
  }
}
