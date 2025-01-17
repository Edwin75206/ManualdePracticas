import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practica2Component } from './Practicas/practica2/practica2.component';
import { Practica02Component } from './Practicas/practica02/practica02.component';
import { Practica03Component } from './Practicas/practica03/practica03.component';
import { Practica04Component } from './Practicas/practica04/practica04.component';
import { Practica6Component } from './Practicas/practica6/practica6.component';
import { Practica05Component } from './Practicas/practica05/practica05.component';
import { Practica07Component } from './Practicas/practica07/practica07.component';
import { Practica08Component } from './Practicas/practica08/practica08.component';
import { FormsModule } from '@angular/forms'; //para EL NG MODEL
import { NavbarComponent } from './components/navbar/navbar.component';
import { Practica09Component } from './Practicas/practica09/practica09.component';
import { Practica010Component } from './Practicas/practica010/practica010.component';
import { Practica011Component } from './Practicas/practica011/practica011.component';
import { Practica1Component } from './Practicas/practica1/practica1.component';
import { Practica012Component } from './Practicas/practica012/practica012.component';
import { Practica013Component } from './Practicas/practica013/practica013.component';
import { Practica014Component } from './Practicas/practica014/practica014.component';
import { Practica015Component } from './Practicas/practica015/practica015.component';
import { Practica016Component } from './Practicas/practica016/practica016.component';
import { CalculadoraImcComponent } from './Practicas/practica016/calculadora-imc/calculadora-imc.component';
import { ResultadoImcComponent } from './Practicas/practica016/resultado-imc/resultado-imc.component';
import { Practica017Component } from './Practicas/practica017/practica017.component';
import { FiltroComponent } from './Practicas/practica017/componentes/filtro/filtro.component';
import { TablaArticulosComponent } from './Practicas/practica017/componentes/tabla-articulos/tabla-articulos.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SketchesComponent } from './sketches/sketches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Practica018Component } from './Practicas/practica018/practica018.component';
import { DashboardComponent } from './Practicas/practica018/Componentes/dashboard/dashboard.component';
import { NavbartemperaturaComponent } from './Practicas/practica018/Componentes/navbartemperatura/navbartemperatura.component';
import{ HttpClientModule } from '@angular/common/http';//para las peticiones hhtpp es necesario cuando concatenamos una URL
import { Practica019Component } from './Practicas/practica019/practica019.component';
import { FormularioComponent } from './Practicas/practica019/componentes/formulario/formulario/formulario.component';
import { NavbarnoticiasComponent } from './Practicas/practica019/componentes/navbarnoticias/navbarnoticias/navbarnoticias.component';
import { SpinnerComponent } from './Practicas/practica019/shared/spinner/spinner.component';
import { ListadoNoticiasComponent } from './Practicas/practica019/componentes/listado-noticias/listado-noticias/listado-noticias.component';
import { Practica020Component } from './Practicas/practica020/practica020.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Practica2Component,
    Practica02Component,
    Practica03Component,
    Practica04Component,
    Practica6Component,
    Practica05Component,
    Practica07Component,
    Practica08Component,
    NavbarComponent,
    Practica09Component,
    Practica010Component,
    Practica011Component,
    Practica1Component,
    Practica012Component,
    Practica013Component,
    Practica014Component,
    Practica015Component,
    Practica016Component,
    CalculadoraImcComponent,
    ResultadoImcComponent,
    Practica017Component,
    FiltroComponent,
    TablaArticulosComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent,
    SketchesComponent,
    ProfileComponent,
    Practica018Component,
    DashboardComponent,
    NavbartemperaturaComponent,
    Practica019Component,
    FormularioComponent,
    NavbarnoticiasComponent,
    SpinnerComponent,
    ListadoNoticiasComponent,
    Practica020Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
