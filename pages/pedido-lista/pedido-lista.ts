import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'
import { PedidoDetallePage } from '../pedido-detalle/pedido-detalle'

/*
  Generated class for the PedidoLista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pedido-lista',
  templateUrl: 'pedido-lista.html'
})
export class PedidoListaPage {

  constructor(public navCtrl: NavController, public Perfil: Perfil, public toastCtrl: ToastController) {
    if (Perfil.pedidos.length === 0) {
      let toast = this.toastCtrl.create({
        message: 'Aún no tienes ningun pedido',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle'
      });
      toast.present();
      toast.onDidDismiss(() => { });
    }
  }

  ionViewDidLoad() {
    console.log('Hello PedidoListaPage Page');
  }

  detallepedido(id) {
    this.navCtrl.push(PedidoDetallePage, { id });
  }
  dismiss() {
    this.navCtrl.pop();
  }
}
