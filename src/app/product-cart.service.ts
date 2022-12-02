import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];

  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(product: Product) {
    let item: Product | undefined;
    item = this._cartList.find((v1) => v1.model == product.model);
    if (!item) {
      this._cartList.push({ ... product});
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }


}
