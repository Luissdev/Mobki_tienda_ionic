import { Component } from '@angular/core';

import { MenuController } from 'ionic-angular'
import { CategoriaPage } from '../categoria/categoria'
import { CarritoPage } from '../carrito/carrito'
import { InicioPage } from '../inicio/inicio'
import { PerfilPage } from '../perfil/perfil'

import { Producto } from '../../providers/producto'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = CategoriaPage;
  tab3Root: any = CarritoPage;
  tab4Root: any = PerfilPage;

  constructor(private menuCtrl: MenuController, public Producto: Producto) {
    this.Producto.getDestacados();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
