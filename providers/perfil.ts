import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

// import { Carrito } from '../providers/carrito'


/*
  Generated class for the Perfil provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Perfil {
  public perfil = { "nombre": '', "correo": '' };
  public pedidos = [];
  public pedido_detalle = [];
  public total: number = 0;
  public url = 'http://luis.mbk11.net/laravel/public/auth/';
  public direcciones = [];
  public direccion: string = "";
  headers = new Headers();

  constructor(public http: Http) {
    if (localStorage.getItem('data') && localStorage.getItem('usr')) {
      this.perfil = JSON.parse(localStorage.getItem('data'));
      console.log(this.perfil);
      this.getPedidos();
    }
  }

  getPedidos() {
    this.http.get(this.url + 'pedido/pedidos/' + localStorage.getItem('usr'))
      .toPromise()
      .then(respuesta => this.pedidos = respuesta.json());
  }

  getPedidoDetalle(id: number) {
    this.http.get(this.url + `pedido/pedido-detalle/${id}`)
      .toPromise()
      .then(respuesta => {
        this.pedido_detalle = respuesta.json()
        console.log(respuesta);
        this.direccion = this.pedido_detalle[0].direccion_secundaria;
        this.getTotal();
      });
  }

  getTotal() {
    this.total = 0;
    for (let producto of this.pedido_detalle) {
      this.total += producto.cantidad * producto.precio;
    }
  }

  crearDireccion(direccion: string, guardar: number) {
    this.headers.append('Content-Type', 'application/json');
    let direccionobj = { "token": localStorage.getItem('usr'), "direccion": direccion, "guardar": guardar };
    return this.http.post(this.url + 'cliente/nueva-direccion', direccionobj, { headers: this.headers })
      .toPromise()
      .then(respuesta => respuesta.json());
  }

  getDirecciones() {
    this.http.get(this.url + `cliente/direcciones/` + localStorage.getItem('usr'))
      .toPromise()
      .then(respuesta => {
        this.direcciones = respuesta.json();
        console.log(this.direcciones);
      });
  }
  getActualizarPerfil() {
  }
}
