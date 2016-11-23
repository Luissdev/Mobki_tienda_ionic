import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Categoria provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Categoria {
  public url: string = 'http://luis.mbk11.net/laravel/public/auth/';
  public all_productos;
  public productos_buscar;

  constructor(public http: Http) {
    console.log('Hello Categoria Provider');
    this.getTodosProductos();
  }

  // resetear() {
  //   this.getTodosProductos();
  // }

  getCategorias() {
    return this.http.get(this.url + 'categoria/categorias')
      .toPromise()
      .then(respuesta => respuesta.json());
  }

  getProductoCategoria(categoria: string) {
    return this.http.get(this.url + `categoria/productos/${categoria}`)
      .toPromise()
      .then(respuesta => respuesta.json());
  }

  getTodosProductos() {
    return this.http.get(this.url + 'producto/productos')
      .toPromise()
      .then(respuesta => this.all_productos = respuesta.json());
  }
  getBuscar(producto: string) {
    // this.getTodosProductos();
    // this.productos_buscar = this.all_productos;
    console.log(producto);
    this.productos_buscar = this.all_productos;
    if (producto && producto.length > 0) {
      this.productos_buscar = this.productos_buscar.filter((item) => {
        return (item.nombre.toString().toLowerCase().indexOf(producto.toLowerCase()) > -1);
      });
    }
    return this.productos_buscar;
  }
}
