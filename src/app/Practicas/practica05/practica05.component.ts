import { Component } from '@angular/core';

@Component({
  selector: 'app-practica05',
  templateUrl: './practica05.component.html',
  styleUrls: ['./practica05.component.css']
})
export class Practica05Component {
  nombre = 'Edwin'

  constructor(){
    setInterval(()=> this.nombre = "Edwin Donovan Castañeda Calderon", 3000)
  }
}
