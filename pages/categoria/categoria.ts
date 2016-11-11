import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { Producto } from '../../providers/producto'
import { Carrito } from '../../providers/carrito'
import { Categoria } from '../../providers/categoria'

import { ProductoDetallePage } from '../producto-detalle/producto-detalle'

/*
  Generated class for the Categoria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {
  public productos;
  public categorias;
  public categoriaSeleccionada;
  public lbl_destacados = false;

  constructor(public navCtrl: NavController,
    public Producto: Producto,
    public Carrito: Carrito,
    public Categoria: Categoria,
    public modalCtrl: ModalController) {
    this.lbl_destacados = true;
    this.Producto.getDestacados().then(respuesta => this.productos = respuesta);
    this.Categoria.getCategorias().then(respuesta => this.categorias = respuesta);
  }

  agregarCarrito(id: number, nombre: string, precio: number, imagen: string) {
    let producto = { "id": null, "nombre": '', "precio": null, "cantidad": null, "imagen": null };
    producto.id = id;
    producto.nombre = nombre;
    producto.precio = precio;
    producto.cantidad = 1;
    this.Carrito.agregarCarrito(producto);
  }

  getCategoria(evento) {
    // console.log(evento);
    this.Categoria.getProductoCategoria(evento).then(respuesta => this.productos = respuesta);
    this.lbl_destacados = false;
  }

  getItems(nombre) {
    let buscar: string = nombre.target.value;
    if (buscar != '' && buscar && buscar.trim()) {
      this.Categoria.getBuscar(nombre.target.value);
      this.productos = this.Categoria.productos_buscar;
      this.lbl_destacados = false;
    } else {
      this.Producto.getDestacados().then(respuesta => this.productos = respuesta);
      this.lbl_destacados = true;
    }
  }

  mostrarProducto(producto) {
    let producto_modal = this.modalCtrl.create(ProductoDetallePage, { producto })
    producto_modal.present();
  }

  ionViewDidLoad() {
    console.log('Hello CategoriaPage Page');
  }

}
