import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router){}

  pagina="";
  next=""
  mensaje="";
  before=""
  ngOnInit():void{
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.pagina=event.url;
        switch(this.pagina){
          case "/practica1":
            this.pagina="Práctica 1"
            this.mensaje="Metodología de evaluación de la asignatura"
            this.next="/practica2"
            this.before="/practica1"

          break

          case "/practica2":
            this.pagina="Práctica 2"
            this.mensaje="Primera aplicación en angular"
            this.next="/practica03"
            this.before="/practica1"
          break

          case "/practica03":
            this.pagina="Práctica 3"
            this.mensaje="Integración de bootstrap remoto en un proyecto de angular"
            this.next="/practica04"
            this.before="/practica2"
          break

          case "/practica04":
            this.pagina="Práctica 4"
            this.mensaje="Integración de bootstrap localmente en un proyecto de angular"
            this.next="/practica05"
            this.before="/practica03"
          break

          case "/practica05":
            this.pagina="Práctica 5"
            this.mensaje="Interpolación"
            this.next="/practica6"
            this.before="/practica04"
          break

          case "/practica6":
            this.pagina="Práctica 6"
            this.mensaje="Property Binding"
            this.next="/practica07"
            this.before="/practica05"
          break

          case "/practica07":
            this.pagina="Práctica 7"
            this.mensaje="Event Binding"
            this.next="/practica08"
            this.before="/practica6"
          break

          case "/practica08":
            this.pagina="Práctica 8"
            this.mensaje="Two Way Data Binding"
            this.next="/practica09"
            this.before="/practica07"
          break

          case "/practica09":
            this.pagina="Práctica 9"
            this.mensaje="*ngFor"
            this.next="/practica010"
            this.before="/practica08"
          break

          case "/practica010":
            this.pagina="Práctica 10"
            this.mensaje="*ngIf"
            this.next="/practica011"
            this.before="/practica09"
          break

          case "/practica011":
            this.pagina="Práctica 11"
            this.mensaje="*ngStyle"
            this.next="/practica012"
            this.before="/practica010"
          break

          case "/practica012":
            this.pagina="Práctica 12"
            this.mensaje="*ngClass"
            this.next="/practica013"
            this.before="/practica011"
          break

          case "/practica013":
            this.pagina="Práctica 13"
            this.mensaje="*ngSWitch"
            this.next="/practica014"
            this.before="/practica012"
          break

          case "/practica014":
            this.pagina="Práctica 14"
            this.mensaje="Piano"
            this.next="/practica015"
            this.before="/practica013"
          break

          case "/practica015":
            this.pagina="Práctica 15"
            this.mensaje="Convertidor de divisas"
            this.next="/practica016"
            this.before="/practica014"
          break

          case "/practica016":
            this.pagina="Práctica 16"
            this.mensaje="Convertidor IMC"
            this.next="/practica017"
            this.before="/practica015"
          break

          case "/practica017":
            this.pagina="Práctica 17"
            this.mensaje="Filtrado de Articulos"
            this.next="/practica018"
            this.before="/practica016"
          break

          case "/practica018":
            this.pagina="Práctica 18 "
            this.mensaje="Clima"
            this.next="/practica019"
            this.before="/practica017"
          break

          case "/practica019":
            this.pagina="Práctica 19 "
            this.mensaje="Noticias"
            this.next="/practica017"
            this.before="/practica018"
          break

          case "/sketches":
            this.pagina="Sketches"
            break
        }
      }
    })
  }
}
