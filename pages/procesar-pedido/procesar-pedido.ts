import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'
import { Carrito } from '../../providers/carrito'

/*
  Generated class for the ProcesarPedido page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-procesar-pedido',
  templateUrl: 'procesar-pedido.html'
})
export class ProcesarPedidoPage {
  public direccion_seleccionada: number;
  public direccion: boolean = false;
  public nueva_direccion: string = "";

  constructor(public navCtrl: NavController, public Perfil: Perfil, public Carrito: Carrito,
    public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.Perfil.getDirecciones();

    this.checarDireccion();

    if (this.Perfil.direcciones.length <= 0) {
      this.direccion = true;
    }
  }

  nuevaDireccion() {
    this.direccion = true;
  }

  ionViewDidLoad() {
    console.log('Hello ProcesarPedidoPage Page');
  }

  getDireccion(id) {
    console.log(id);
    // this.direccion_seleccionada = id;
    // console.log(id);
    // console.log(this.direccion_seleccionada);
  }

  crearPedido() {
    // console.log(this.direccion_seleccionada);
    if (this.Perfil.direcciones.length <= 0 && this.nueva_direccion.length <= 0) {
      let toast = this.toastCtrl.create({
        message: 'Aún no tienes ninguna direccion registrada',
        showCloseButton: true,
        closeButtonText: 'cerrar',
        position: 'middle'
      });
      toast.present();
      toast.onDidDismiss(() => { });
    } else if (this.nueva_direccion.length > 0 && this.nueva_direccion != ' ') {
      let alerta = this.alertCtrl.create({
        title: 'Guardar dirección',
        message: '¿Desea guardar la nueva dirección para futuros pedidos?',
        buttons: [{
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.Perfil.crearDireccion(this.nueva_direccion, 0).then(respuesta => {
              this.direccion_seleccionada = respuesta;
              this.Carrito.crearPedido(this.direccion_seleccionada)
            });
            console.log(this.direccion_seleccionada);
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.Perfil.crearDireccion(this.nueva_direccion, 1).then(respuesta => {
              this.direccion_seleccionada = respuesta;
              this.Carrito.crearPedido(this.direccion_seleccionada)
            });
          }
        }
        ]
      });
      alerta.present();
      // console.log(this.nueva_direccion);
    } else if (this.direccion_seleccionada) {
      // console.log(this.direccion_seleccionada);
      this.Carrito.crearPedido(this.direccion_seleccionada);
    }

    this.navCtrl.pop();
    // this.Carrito.crearPedido(this.direccion_seleccionada);
  }

  checarDireccion() {

  }

  dismiss() {
    this.navCtrl.pop();
  }

}
