import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public params: NavParams,
    public Perfil: Perfil, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('Hello PedidoDetallePage Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
