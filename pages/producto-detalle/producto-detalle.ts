import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController, NavParams } from 'ionic-angular';
import { Carrito } from '../../providers/carrito'


/*
  Generated class for the ProductoDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-producto-detalle',
  templateUrl: 'producto-detalle.html'
})
export class ProductoDetallePage {
  public producto;
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public params: NavParams,
    public Carrito: Carrito) {
    this.producto = params.get('producto');
  }
  agregarCarrito() {
    let producto = { "id": null, "nombre": '', "precio": null, "cantidad": null, "imagen": null };
    producto.id = this.producto.id;
    producto.nombre = this.producto.nombre;
    producto.precio = this.producto.precio;
    producto.cantidad = 1;
    producto.imagen = this.producto.imagen;
    this.Carrito.agregarCarrito(producto);
  }
  ionViewDidLoad() {
    console.log('Hello ProductoDetallePage Page');
  }

  dismiss() {
    this.navCtrl.pop();
  }
}
