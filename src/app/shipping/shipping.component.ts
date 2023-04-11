import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  // PROPERTY
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  // CONSTRUCTOR
  constructor(private cartService: CartService) {}

  // METHODS

  // initialize shippingCosts property by fetching json data using CartService
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
