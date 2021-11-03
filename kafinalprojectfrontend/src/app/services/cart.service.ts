import { Injectable } from '@angular/core';
import { cartItems } from '../models/carItems';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product){
    let item = cartItems.find(c=>c.product.productId===product.productId);
    if(item){
item.quantity+=1;
    }
    else{
      let cartItem= new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      cartItems.push(cartItem);
    }
  }
    list():CartItem[]{
      return cartItems;
    }
    removeFromCart(product:Product){
      let item:CartItem = cartItems.find(c=>c.product.productId===product.productId);
      cartItems.splice(cartItems.indexOf(item),1)
    }
}
