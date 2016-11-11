import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Carrito } from '../../providers/carrito'
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
  constructor(public navCtrl: NavController, public Carrito: Carrito) {
    // this.carrito = this.Carrito.localCarrito;
    this.Carrito.getTotal();
  }

  ionViewDidLoad() {
    console.log('Hello CarritoPage Page');
  }
}
