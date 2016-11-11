import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Login {
  public token;
  public url = 'http://luis.mbk11.net/laravel/public/auth/';
  headers = new Headers();

  constructor(public http: Http) {
    console.log('Hello Login Provider');
  }

  getLogin(usuario) {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'cliente/login', JSON.stringify(usuario), { headers: this.headers })
      .toPromise()
      .then(respuesta => respuesta.json());
  }

  getRegistro(usuario) {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'cliente/registro', JSON.stringify(usuario), { headers: this.headers })
      .toPromise()
      .then(respuesta => respuesta.json());
  }

  getUsuario() {
    this.http.get(this.url + 'cliente/cliente/' + this.token)
      .toPromise()
      .then(respuesta => {
        localStorage.setItem('data', JSON.stringify(respuesta.json()))
      });
  }
}
