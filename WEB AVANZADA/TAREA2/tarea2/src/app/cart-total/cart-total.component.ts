import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [],
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  total = 0;
  cartItems = [
    { name: 'Producto 1', price: 19.99, quantity: 1 },
    { name: 'Producto 2', price: 29.99, quantity: 1 },
  ];

  // Método para calcular el total del carrito
  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return this.total;
  }
}
