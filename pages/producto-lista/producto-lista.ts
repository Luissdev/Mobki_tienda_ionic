import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController, LoadingController } from 'ionic-angular';

import { ProductoDetallePage } from '../producto-detalle/producto-detalle'
import { Categoria } from '../../providers/categoria'
import { Carrito } from '../../providers/carrito'

/*
  Generated class for the ProductoLista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-producto-lista',
  templateUrl: 'producto-lista.html'
})
export class ProductoListaPage {
  public id: string;
  public productos = [];
  constructor(public navCtrl: NavController, public params: NavParams,
    public Categoria: Categoria, public modalCtrl: ModalController, public Carrito: Carrito,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Cargando lista de productos',
    });
    loading.present();
    if (this.params.get('id')) {
      this.id = this.params.get('id')
      this.Categoria.getProductoCategoria(this.id).then(respuesta => {
        this.productos = respuesta
        loading.dismiss();
      }).catch(() => loading.dismiss);
    } else if (params.get('buscar')) {
      this.id = this.params.get('buscar')
      this.Categoria.getBuscar(this.id);
      this.productos = this.Categoria.productos_buscar;
      this.id = `Resultados para: ${this.id}`;
      loading.dismiss();
    }
  }

  mostrarProducto(producto) {
    this.navCtrl.push(ProductoDetallePage, { producto });
    // let producto_modal = this.modalCtrl.create(ProductoDetallePage, { producto })
    // producto_modal.present();

    // producto_modal.onDidDismiss(data => console.log(data));
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

  ionViewDidLoad() {
    console.log('Hello ProductoListaPage Page');
  }

}
