import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'

import { PedidoDetallePage } from '../pedido-detalle/pedido-detalle'

/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  constructor(public navCtrl: NavController,
    public Perfil: Perfil,
    public modlaCtrl: ModalController) { }

  getPedidos() {
    // let pedidos = this.Perfil.pedidos;
    let modal_pedido = this.modlaCtrl.create(PedidoDetallePage)
    modal_pedido.present();
  }
  ionViewDidLoad() {
    console.log('Hello PerfilPage Page');
  }

}
