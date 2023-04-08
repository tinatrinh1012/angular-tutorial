import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // PROPERTY
  items = this.cartService.getItems();

  // CONSTRUCTOR
  constructor(private cartService: CartService) {}
}
