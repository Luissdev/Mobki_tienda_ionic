import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Carrito provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Carrito {
  public localCarrito = [];
  public total = 0;
  headers = new Headers();
  public url = 'http://luis.mbk11.net/laravel/public/auth/';

  constructor(public http: Http) {
    console.log('Hello Carrito Provider');
    if (localStorage.getItem('carrito')) {
      this.localCarrito = JSON.parse(localStorage.getItem('carrito'));
    }
  }

  agregarCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito) {
      this.localCarrito = carrito;
      let sumarCarrito = this.sumarCarrito(producto.id);
      if (+sumarCarrito === 1) {
        console.log('Este producto ya existe en su carrito');
      } else {
        this.localCarrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
      }
    } else {
      this.localCarrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
    }
    this.localCarrito = JSON.parse(localStorage.getItem('carrito'));
    this.getTotal();
  }
  crearPedido() {
    let token = localStorage.getItem('usr');
    let productos = this.localCarrito;
    let datos = { "token": token, "productos": productos };
    return this.http.post(this.url + 'pedido/crear-pedido', JSON.stringify(datos), { headers: this.headers })
      .toPromise()
      .then(respuesta => {
        console.log(respuesta)
        this.localCarrito = [];
        localStorage.removeItem('carrito');
        this.total = 0;
      });
  }

  getCarrito() {
    // console.log(JSON.parse(localStorage.getItem('carrito')));
    return JSON.parse(localStorage.getItem('carrito'));
  }

  getTotal() {
    if (this.localCarrito.length > 0) {
      this.total = 0;
      for (let producto of this.localCarrito) {
        this.total += producto.precio * producto.cantidad;
      }
    }
  }

  sumarCarrito(id) {
    let index = 0;
    let i = 0;
    let cantidad = 0;
    for (let item of this.localCarrito) {
      i++;
      if (item.id == id) {
        if (confirm("Este producto ya se encuentra en su carrito, ¿Desea agregarlo de nuevo?")) {
          cantidad = item.cantidad += 1;
          console.log('Aqui esta sumando la cantidad' + cantidad);
          localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
        }
        return 1;
      }
    }
  }

  sumarItem(id) {
    let cantidad = 0;
    for (let item of this.localCarrito) {
      if (item.id == id) {
        cantidad = item.cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
        this.total += +item.precio;
        return 1;
      }
    }
  }

  restarItem(id) {
    let cantidad = 0;
    for (let item of this.localCarrito) {
      if (item.id == id) {
        if (item.cantidad >= 1) {
          cantidad = item.cantidad -= 1;
          // console.log('Aqui esta sumando la cantidad' + cantidad);
          localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
          this.total -= item.precio;
          console.log(item.precio);
          return 1;
        } else {
        }
      }
    }
  }

  vaciarCarrito() {
    this.localCarrito = [];
    localStorage.removeItem('carrito');
  }
}
