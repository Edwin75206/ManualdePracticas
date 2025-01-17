import { Component } from '@angular/core';

@Component({
  selector: 'app-practica07',
  templateUrl: './practica07.component.html',
  styleUrls: ['./practica07.component.css']
})
export class Practica07Component {

  texto="Hola, Mi nombre es: Edwin Donovan Castañeda Calderon";

  i=0;
  cambiaTexto() : void
  { //UNA FUNCION QUE NO REGRESA NADA EL VOID
    
  this.i++
    if (this.i==1) 
      this.texto="Y estudio la carrera de: TSU en EVND"
    
    else if(this.i==2)
      this.texto="Mi materia favorita es: FrameWorks de desarrollo web"
    
    else if(this.i==3)
      this.texto="Mis hobbies son: jugar futbol"  

    else {
    this.texto="Hola, Mi nombre es: Edwin Donovan Castañeda Calderon"
    this.i=0
  }
}
}
