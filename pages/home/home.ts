import { Component } from '@angular/core';

import { ModalController, NavParams, NavController } from 'ionic-angular';

import { ProductoDetallePage } from '../producto-detalle/producto-detalle'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private params: NavParams) {

  }

  productoDetalle() {
    let modal = this.modalCtrl.create(ProductoDetallePage);
    modal.present();
  }
}
