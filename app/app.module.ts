import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductoDetallePage } from '../pages/producto-detalle/producto-detalle'
import { CategoriaPage } from '../pages/categoria/categoria'
import { CarritoPage } from '../pages/carrito/carrito'
import { InicioPage } from '../pages/inicio/inicio'
import { PerfilPage } from '../pages/perfil/perfil'
import { LoginPage } from '../pages/login/login'
import { Producto } from '../providers/producto'
import { Carrito } from '../providers/carrito'
import { Categoria } from '../providers/categoria'
import { Login } from '../providers/login'
import { Perfil } from '../providers/perfil'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductoDetallePage,
    CategoriaPage,
    CarritoPage,
    InicioPage,
    PerfilPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductoDetallePage,
    CategoriaPage,
    CarritoPage,
    InicioPage,
    PerfilPage,
    LoginPage
  ],
  providers: [Producto, Carrito, Categoria, Login, Perfil]
})
export class AppModule { }
