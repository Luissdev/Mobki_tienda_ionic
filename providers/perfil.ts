import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Perfil provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Perfil {
  public perfil = { "nombre": '', "correo": '', "descripcion": ''};
  public pedidos = [];
  public url = 'http://luis.mbk11.net/laravel/public/auth/';

  constructor(public http: Http) {
    if (localStorage.getItem('data') && localStorage.getItem('usr')) {
      console.log('hola');
      this.perfil = JSON.parse(localStorage.getItem('data'))[0];
      console.log(this.perfil);
    }
  }

  getPedidos() {
    this.http.get(this.url + 'pedido/pedidos/' + localStorage.getItem('usr'))
      .toPromise()
      .then(respuesta => this.pedidos = respuesta.json());
  }
  getActualizarPerfil() {

  }


}
