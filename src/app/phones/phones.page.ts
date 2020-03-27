import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../phones.service';
import { Phone } from '../phone.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.page.html',
  styleUrls: ['./phones.page.scss'],
})
export class PhonesPage implements OnInit {
  phones: Phone[];

  constructor(private phonesService: PhonesService) {}
  
  ngOnInit() {
    this.phones = this.phonesService.getAllPhones();
  }
}


