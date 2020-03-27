import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../phones.service';
import { CartService } from './../cart.service';
import { AlertController } from '@ionic/angular';
import { Phone } from '../phone.model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.page.html',
  styleUrls: ['./phone-detail.page.scss'],
})
export class PhoneDetailPage implements OnInit {
  loadedPhone: Phone;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private phonesService: PhonesService,
    private cartService: CartService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('phoneId')){
        //redirect
        return
      }
      const phoneId = paramMap.get('phoneId');
      this.loadedPhone = this.phonesService.getPhone(phoneId);
      this.getSubTotal();
    })
    
  }

  async add() {
    this.cartService.addToCart(this.loadedPhone);
    const addedToCartAlert = await this.alertController.create({
      header: 'Added to cart!',
      message: `${this.loadedPhone.quantity} - ${this.loadedPhone.model} has been added to your cart.`,
      backdropDismiss: false,
      buttons: 
        [
          {
            text: 'OK',
            handler: () => {
              this.ngOnInit();
            }
          }
        ]
    });
    await addedToCartAlert.present();
  }

  getSubTotal(){
    this.loadedPhone.total = this.loadedPhone.price * this.loadedPhone.quantity;
    return this.loadedPhone.total;
  }
}
