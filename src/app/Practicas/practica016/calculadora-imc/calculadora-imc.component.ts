import { Component } from '@angular/core';
import{Router} from '@angular/router'
import{faMars,faVenus,faMinus,faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent {
  faMars = faMars;
  faVenus= faVenus;
  faMinus = faMinus;
  faPlus = faPlus;

  edad=18;
  altura=1.50;
  peso=60;
  genero = 'Masculino'



  cambiaAltura(event:any):number{
    console.log(`el usuario ajusto la interfaz desde el range: ${event.target.value} `)

    this.altura=event.target.value
    return 0


  }

  cambioGenero(genero:string){
    if (genero==='Masculino') 
    {
      this.genero='Masculino';
    }
    else
    {
      this.genero='Femenino';
    }
  }

  constructor(private router:Router){ 
    
  }

  calculaIMC(){
    const calculo = this.peso/Math.pow(this.altura,2);
    console.log(`Tu indice de masa corporal es: ${calculo.toFixed(1)} `);
    this.router.navigate(['resultado-imc', calculo.toFixed(1),this.genero,this.edad]);
  }
}
