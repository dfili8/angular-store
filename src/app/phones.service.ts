import { Injectable } from '@angular/core';
import { Phone } from './phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  private phones: Phone[] = [
    {
      id: 'FIC839e3if',
      manufacturer: 'Google',
      model: 'Pixel 2 XL',
      price: 499,
      quantity: null,
      imgURL: "http://cdn.androidbeat.com/wp-content/uploads/2017/10/Pixel-2-XL.png",
      releaseDate: '2018-05-22',
      description: "Google Pixel 2 XL has 64/128 GB of internal memory. This device has a Qualcomm MSM8998 Snapdragon 835 chipset. The main screen size is displaysize6.0 inches, 92.6 cm2 with 1440 x 2880 pixels, 18:9 ratio resolution. It has a 538 ppi density) ppi pixel density. The screen covers about 76.4% of the device's body.",
      total: 0
    },
    {
      id: 'ckeFCi839ti',
      manufacturer: 'Samsung',
      model: 'Galaxy S9',
      price: 699,
      quantity: null,
      imgURL: "https://www.valuewalk.com/wp-content/uploads/2017/11/Galaxy-S9-Render.jpg",
      releaseDate: '2019-06-12',
      description: "Samsung Galaxy S9 supports frequency bands GSM , HSPA , LTE. Official announcement date is February 2018. The device is working on an Android 8.0 (Oreo) with a Octa-core (4x2.7 GHz Mongoose M3 & 4x1.8 GHz Cortex-A55) - EMEAOcta-core (4x2.7 GHz Kryo 385 Gold & 4x1.7 GHz Kryo 385 Silver) - USA & China processor and 4 GB RAM memory. Samsung Galaxy S9 has 64/128/256 GB of internal memory.",
      total: 0
    },
    {
      id: 'bmuruv7493xieF',
      manufacturer: 'Apple',
      model: 'iPhone X',
      price: 999,
      quantity: null,
      imgURL: "https://cdn.dxomark.com/wp-content/uploads/2018/07/apple_iphonex-1024x768.jpg",
      releaseDate: '2019-02-15',
      description: "Apple iPhone X supports frequency bands GSM , CDMA , HSPA , EVDO , LTE. Official announcement date is September 2017. The device is working on an iOS 11 with a Hexa-core (2x Monsoon + 4x Mistral) processor and 3 GB RAM memory. Apple iPhone X has 64/256 GB of internal memory. This device has a Apple A11 Bionic chipset. The main screen size is 5.8 inches with 1125 x 2436 pixels resolution.",
      total: 0
    }
  ];

  constructor() { }

  getAllPhones() {
    return [...this.phones];
  }

  getPhone(phoneId: string){
    return {...this.phones.find(phone => {
      return phone.id === phoneId;
    })};
  }
}
