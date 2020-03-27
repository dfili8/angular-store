import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})

export class CartPage implements OnInit {
  items;

  constructor(
    private cartService: CartService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  
  async deleteAll() {
    const deleteAllItems = await this.alertController.create({
      header: 'Delete all items?',
      message: "Are you sure you'd like to delete all your items in your cart?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.items = this.cartService.clearCart();
          }
        }
      ]
    });
    
    await deleteAllItems.present();
  }

  delete(i: any){
    this.items = this.cartService.deleteItem(i);
  }

}
