import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  RouteName: string = '';
  pagina=""
  mensaje=""

  constructor(private router: Router) {}



  ngOnInit():void {

    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.pagina=event.url;
        switch(this.pagina){
          case "/practica1":
            this.pagina="Práctica 1"
            this.mensaje="Metodología de evaluación de la asignatura"
            
          break

          case "/practica2":
            this.pagina="Práctica 2"
            this.mensaje="Primera aplicación en angular"
          break

          case "/practica03":
            this.pagina="Práctica 3"
            this.mensaje="Integración de bootstrap remoto en un proyecto de angular"
          break

          case "/practica04":
            this.pagina="Práctica 4"
            this.mensaje="Integración de bootstrap localmente en un proyecto de angular"
          break

          case "/practica05":
            this.pagina="Práctica 5"
            this.mensaje="Interpolación"
          break

          case "/practica6":
            this.pagina="Práctica 6"
            this.mensaje="Property Binding"
          break

          case "/practica07":
            this.pagina="Práctica 7"
            this.mensaje="Event Binding"
          break

          case "/practica08":
            this.pagina="Práctica 8"
            this.mensaje="Two Way Data Binding"
          break

          case "/practica09":
            this.pagina="Práctica 9"
            this.mensaje="*ngFor"
          break

          case "/practica010":
            this.pagina="Práctica 10"
            this.mensaje="*ngIf"
          break

          case "/practica011":
            this.pagina="Práctica 11"
            this.mensaje="*ngStyle"
          break

          case "/practica012":
            this.pagina="Práctica 12"
            this.mensaje="*ngClass"
          break

          case "/practica013":
            this.pagina="Práctica 13"
            this.mensaje="*ngSWitch"
          break

          case "/practica014":
            this.pagina="Práctica 14"
            this.mensaje="Piano"
          break

          case "/practica015":
            this.pagina="Práctica 15"
            this.mensaje="Convertidor de divisas"
          break

          case "/practica016":
            this.pagina="Práctica 16"
            this.mensaje="Convertidor IMC"
          break

          case "/practica017":
            this.pagina="Práctica 17"
          break

          case "/sketches":
            this.pagina="Sketches"
            break
        }
      }
    })

    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
  
        this.RouteName = decodeURIComponent(event.url);
        console.log('Nombre de la ruta actual:', this.RouteName);

        
        this.updatePracticaInfoBasedOnRoute(this.RouteName);
      });
  }
  updatePracticaInfoBasedOnRoute(RouteName: string) {
    throw new Error('Method not implemented.');
  }
}
