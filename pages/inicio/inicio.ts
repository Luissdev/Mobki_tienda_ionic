import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Producto } from '../../providers/producto'

/*
  Generated class for the Inicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  public productos;
  constructor(public navCtrl: NavController, public Producto: Producto) {
    this.Producto.getDestacados().then(respuesta => this.productos = respuesta);
  }

  ionViewDidLoad() {
    console.log('Hello InicioPage Page');
  }

}
