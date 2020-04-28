import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from './../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  checkoutItems = [];
  total;

  customer: any = {
    email: null,
    phoneNum: "5866905097",
    cc: null,
  }

  constructor(
    private alertController: AlertController,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    [...this.checkoutItems] = this.cartService.getItems();
    this.total = this.cartService.getTotalSum();
  }
  

  async checkout() {
    const checkoutAlert = await this.alertController.create({
      header: 'Thank you!',
      message: `We appreciate you shopping with us! An order confirmation email has been sent to ${this.customer.email}.`,
      backdropDismiss: false,
      buttons: 
        [
          {
            text: 'OK',
            handler: () => {
              this.checkoutItems = this.cartService.clearCart();
              this.router.navigate(["/"]);
            }
          }
        ]
    });
    await checkoutAlert.present();
  }

}
