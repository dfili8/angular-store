import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items = [];
  sum = [];
  totalCost = new Number(0);

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteItem(index){
    const i = this.items.indexOf(index);
    this.items.splice(i, 1);
    return this.items;
  }

  getTotalSum(){
    this.sum = [];
    for (let i = 0; i < this.items.length; i++) {
      this.sum.push(this.items[i].total);
      this.totalCost = this.sum.reduce((a, b) => a + b, 0);
    }
    return this.totalCost;
  }
}
