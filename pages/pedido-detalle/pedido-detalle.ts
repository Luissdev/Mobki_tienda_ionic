import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'

/*
  Generated class for the PedidoDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pedido-detalle',
  templateUrl: 'pedido-detalle.html'
})
export class PedidoDetallePage {
  public pedido:number;
  constructor(public navCtrl: NavController, public params: NavParams, public Perfil: Perfil) {
    this.pedido = this.params.get('id');
    this.Perfil.getPedidoDetalle(this.pedido);
  }

  ionViewDidLoad() {
    console.log('Hello PedidoDetallePage Page');
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
