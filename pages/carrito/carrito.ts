import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Carrito } from '../../providers/carrito'

import { ProcesarPedidoPage } from '../procesar-pedido/procesar-pedido'
/*
  Generated class for the Carrito page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html'
})
export class CarritoPage {
  public carrito;
  constructor(public navCtrl: NavController, public Carrito: Carrito, public toastCtrl: ToastController) {
    // this.carrito = this.Carrito.localCarrito;
    this.Carrito.getTotal();
    if (Carrito.total === 0) {
      let toast = this.toastCtrl.create({
        message: 'Aún no tienes ningun producto en tu carrito',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle'
      });
      toast.present();
      toast.onDidDismiss(() => { });
    }
  }

  procesarPedido() {
    this.navCtrl.push(ProcesarPedidoPage);
  }

  ionViewDidLoad() {
    console.log('Hello CarritoPage Page');
  }
}
