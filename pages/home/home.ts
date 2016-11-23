import { Component } from '@angular/core';

import { ModalController, NavParams, NavController, Slides } from 'ionic-angular';

import { ProductoDetallePage } from '../producto-detalle/producto-detalle'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mySlideOptions = {
    initialSlide: 1,
    loop: true
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private params: NavParams) {

  }

  productoDetalle() {
    let modal = this.modalCtrl.create(ProductoDetallePage);
    modal.present();
  }
}
