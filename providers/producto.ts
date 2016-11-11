import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

import { ProductoModel } from '../modelos/producto.model'

/*
  Generated class for the Producto provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Producto {
  public url: string = 'http://luis.mbk11.net/laravel/public/auth/';
  public productos;
  constructor(public http: Http) {
    // this.getProductos();
    // console.log('Hello Producto Provider');
  }

  getProductos() {
    return this.http.get(this.url + 'producto/productos')
      .toPromise().then(respuesta => respuesta.json()).catch(error => console.log(error));
  }

  getDestacados() {
    return this.http.get(this.url + 'producto/destacados')
      .toPromise().then(respuesta => respuesta.json()).catch(error => console.log(error));
  }
}
