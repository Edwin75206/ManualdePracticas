import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practica1Component } from './Practicas/practica1/practica1.component';
import { Practica02Component } from './Practicas/practica02/practica02.component';
import { SketchesComponent } from './sketches/sketches.component';
import { Practica2Component } from './Practicas/practica2/practica2.component';
import { Practica03Component } from './Practicas/practica03/practica03.component';
import { Practica04Component } from './Practicas/practica04/practica04.component';
import { Practica05Component } from './Practicas/practica05/practica05.component';
import { Practica6Component } from './Practicas/practica6/practica6.component';
import { Practica07Component } from './Practicas/practica07/practica07.component';
import { Practica08Component } from './Practicas/practica08/practica08.component';
import { Practica09Component } from './Practicas/practica09/practica09.component';
import { Practica010Component } from './Practicas/practica010/practica010.component';
import { Practica011Component } from './Practicas/practica011/practica011.component';
import { Practica012Component } from './Practicas/practica012/practica012.component';
import { Practica013Component } from './Practicas/practica013/practica013.component';
import { Practica014Component } from './Practicas/practica014/practica014.component';
import { Practica015Component } from './Practicas/practica015/practica015.component';
import { Practica016Component } from './Practicas/practica016/practica016.component';
import { ResultadoImcComponent } from './Practicas/practica016/resultado-imc/resultado-imc.component';
import { CalculadoraImcComponent } from './Practicas/practica016/calculadora-imc/calculadora-imc.component';
import { Practica017Component } from './Practicas/practica017/practica017.component';
import { Practica018Component } from './Practicas/practica018/practica018.component';
import { Practica019Component } from './Practicas/practica019/practica019.component';

const routes: Routes = [
  {path:'practica1', component:Practica1Component},
  {path:'practica2', component:Practica2Component},
  {path:'practica02', component:Practica02Component},
  {path:'practica03', component:Practica03Component},
  {path:'practica04', component:Practica04Component},
  {path:'practica05', component:Practica05Component},
  {path:'practica6', component:Practica6Component},
  {path:'practica07', component:Practica07Component},
  {path:'practica08', component:Practica08Component},
  {path:'practica09', component:Practica09Component},
  {path:'practica010', component:Practica010Component},
  {path:'practica011', component:Practica011Component},
  {path:'practica012', component:Practica012Component},
  {path:'practica013', component:Practica013Component},
  {path:'practica014', component:Practica014Component},
  {path:'practica015', component:Practica015Component},
  {path:'practica016', component:Practica016Component},
  {path:'resultado-imc/:valor/:genero/:edad',component:ResultadoImcComponent},
  {path:'calculadora-imc',component:CalculadoraImcComponent},
  {path:'practica017', component:Practica017Component},
  {path:'sketches', component:SketchesComponent},
  {path: 'practica018', component:Practica018Component},
  {path: 'practica019', component:Practica019Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
