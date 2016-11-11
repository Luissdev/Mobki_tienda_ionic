import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../../providers/login'
import { TabsPage } from '../tabs/tabs'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public usuario = { "nombre": '', "correo": '', "contrasenia": '', "confirmar_contrasenia": '' };
  // public nombre: string;
  // public correo: string;
  // public contrasenia: string;
  public confirmar_contrasenia: string;
  public accion: string = 'login';
  public login = true;

  constructor(public navCtrl: NavController, public Login: Login) {
    if (localStorage.getItem('usr')) {
      this.navCtrl.setRoot(TabsPage);
      this.login = true;
    } else {
      this.login = false;
    }
  }

  onLogin() {
    if (this.usuario.correo.length > 0 && this.usuario.contrasenia.length > 0) {
      this.Login.getLogin(this.usuario).then(respuesta => {
        if (respuesta) {
          localStorage.setItem('usr', respuesta);
          this.navCtrl.setRoot(TabsPage);
          console.log(respuesta);
          this.Login.token = respuesta;
          this.Login.getUsuario();
        }
      });
    }
  }

  onRegistro() {
    if (this.usuario.nombre.length > 0 && this.usuario.correo.length > 0
      && this.usuario.contrasenia.length > 0 && this.usuario.confirmar_contrasenia.length > 0
      && this.usuario.contrasenia === this.usuario.confirmar_contrasenia) {
      this.Login.getRegistro(this.usuario).then(respuesta => {
        if (respuesta) {
          localStorage.setItem('usr', respuesta);
          this.navCtrl.setRoot(TabsPage);
          console.log(respuesta);
          this.Login.token = respuesta;
          this.Login.getUsuario();
        }
      });
    }
  }
  ionViewDidLoad() {
    // console.log('Hello LoginPage Page');
  }

}
