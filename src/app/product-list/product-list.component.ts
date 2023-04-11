import { Component } from '@angular/core';
import { Product } from '../products';
import { products } from '../products'; // in typical app, fetch products data from API

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // this variable can be accessed from html template
  products = products;

  share(product: Product) {
    window.alert(`${product.name} has been shared!`);
  }

  onNotify(product: Product) {
    window.alert(`You will be notified when ${product.name} goes on sale`);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
