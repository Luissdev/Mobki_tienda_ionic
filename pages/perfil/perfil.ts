import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Perfil } from '../../providers/perfil'

/*
  Generated class for the Perfil page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public Perfil: Perfil) { }

  ionViewDidLoad() {
    console.log('Hello PerfilPage Page');
  }

}
