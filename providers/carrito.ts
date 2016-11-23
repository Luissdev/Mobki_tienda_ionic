import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Perfil } from '../providers/perfil'

/*
  Generated class for the Carrito provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Carrito {
  public localCarrito = [];
  public total = 0;
  public productos = 0;
  headers = new Headers();
  public url = 'http://luis.mbk11.net/laravel/public/auth/';

  constructor(public http: Http, public Perfil: Perfil) {
    if (localStorage.getItem('carrito')) {
      this.localCarrito = JSON.parse(localStorage.getItem('carrito'));
      this.productos = JSON.parse(localStorage.getItem('productos'));
    }
  }

  agregarCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    if (carrito) {
      this.localCarrito = carrito;
      let sumarCarrito = this.sumarCarrito(producto.id);
      if (+sumarCarrito === 1) {
      } else {
        this.localCarrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
        this.productos += 1;
        localStorage.setItem('productos', JSON.stringify(this.productos));
        this.localCarrito = JSON.parse(localStorage.getItem('carrito'));
      }
    } else {
      this.localCarrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
      this.productos += 1;
      localStorage.setItem('productos', JSON.stringify(this.productos));
      this.localCarrito = JSON.parse(localStorage.getItem('carrito'));
    }
    this.getTotal();
  }
  crearPedido(direccion: number) {
    let token = localStorage.getItem('usr');
    let productos = this.localCarrito;
    let datos = { "token": token, "productos": productos, "direccion": direccion };
    return this.http.post(this.url + 'pedido/crear-pedido', JSON.stringify(datos), { headers: this.headers })
      .toPromise()
      .then(respuesta => {
        console.log(respuesta);
        this.localCarrito = [];
        localStorage.removeItem('carrito');
        this.total = 0;
        this.productos = 0;
        this.Perfil.getPedidos();
      });
  }

  getCarrito() {
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
          localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
          this.productos += 1;
          localStorage.setItem('productos', JSON.stringify(this.productos));
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
        this.productos += 1;
        localStorage.setItem('productos', JSON.stringify(this.productos));
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
          localStorage.setItem('carrito', JSON.stringify(this.localCarrito));
          this.total -= item.precio;
          this.productos -= 1;
          localStorage.setItem('productos', JSON.stringify(this.productos));
          return 1;
        } else {
        }
      }
    }
  }

  vaciarCarrito() {
    this.localCarrito = [];
    localStorage.removeItem('carrito');
    localStorage.removeItem('productos');
    this.productos = 0;
  }
}
