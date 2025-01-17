import { Component } from '@angular/core';
import{faMars,faVenus,faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-practica016',
  templateUrl: './practica016.component.html',
  styleUrls: ['./practica016.component.css']
})
export class Practica016Component {

  hayResultado = false

  ocultarCalculadora(valor:boolean){
    if (valor==true) 
    {
        this.hayResultado = false;
    }
    else
    {
      this.hayResultado = true;
    }
  }

}
