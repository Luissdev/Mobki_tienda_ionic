import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'

import { PedidoDetallePage } from '../pedido-detalle/pedido-detalle'
import { LoginPage } from '../login/login'

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
    public accion: string = "perfil";
    constructor(public navCtrl: NavController,
        public Perfil: Perfil,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController) { }

    detallePedido(id) {
        // let pedidos = this.Perfil.pedidos;
        // let modal_pedido = this.modlaCtrl.create(PedidoListaPage)
        // modal_pedido.present();
        this.navCtrl.push(PedidoDetallePage, { id });
    }

    checkToast() {
        if (this.Perfil.pedidos.length === 0) {
            let toast = this.toastCtrl.create({
                message: 'Aún no tienes ningun pedido',
                showCloseButton: true,
                closeButtonText: 'cerrar',
                position: 'top'
            });
            toast.present();
            toast.onDidDismiss(() => { });
        }
    }

    logout() {
        console.log("has cerrado sesion");
        localStorage.removeItem('usr');
        localStorage.removeItem('data');
        localStorage.removeItem('carrito');
        localStorage.removeItem('productos');
        this.navCtrl.setRoot(LoginPage);
        this.Perfil.pedidos = [];
    }
    ionViewDidLoad() {
        console.log('Hello PerfilPage Page');
        console.log(this.Perfil.perfil);
    }
}
