import { Component } from '@angular/core';

@Component({
  selector: 'app-practica6',
  templateUrl: './practica6.component.html',
  styleUrls: ['./practica6.component.css']
})
export class Practica6Component {


  textoPlaceholder= "Estet texto es enviado del .TS al .HTML"

  textoCh = ""

  constructor(){
    setInterval(()=> this.textoPlaceholder = "El texto ha cambiado despues de 5 segundos", 5000)
    
    
    
    setInterval(()=> this.textoCh = "text-success", 5000 )
    setInterval(()=> this.textoCh = "text-danger", 10000 )
    setInterval(()=> this.textoCh = "text-white bg-dark", 15000 )
    

    
  }

  saluda(){    /*funcion sin parametros*/
    return "Hola que tal"
  }

  sumaNumeros(a: number, b:number){ /*Funcion que recibe parametros,
    en este caso recibe dos2 numeros*/
    return (a+b);
  }
  

}