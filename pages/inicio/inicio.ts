import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { ProductoDetallePage } from '../producto-detalle/producto-detalle'
import { Producto } from '../../providers/producto'
import { Carrito } from '../../providers/carrito'

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
  constructor(public navCtrl: NavController, public Producto: Producto, public toastCtrl: ToastController,
    public Carrito: Carrito) {
    this.Producto.getDestacados().then(respuesta => this.productos = respuesta);
  }

  agregarCarrito(id: number, nombre: string, precio: number, imagen: string) {
    let producto = { "id": id, "nombre": nombre, "precio": precio, "cantidad": 1, "imagen": imagen };
    this.Carrito.agregarCarrito(producto);
    let toast = this.toastCtrl.create({
      message: 'Producto agregado a su carrito',
      position: 'middle',
      duration: 1000
    });
    toast.present();
  }
  mostrarProducto(producto) {
    this.navCtrl.push(ProductoDetallePage, { producto });
  }

  ionViewDidLoad() {
    console.log('Hello InicioPage Page');
  }

}
