import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resultado-imc',
  templateUrl: './resultado-imc.component.html',
  styleUrls: ['./resultado-imc.component.css']
})
export class ResultadoImcComponent {
  valor:number;
  resultado:string;
  interpretacion:string;
  genero:string;
  edad:number;
  imagenDeFondo: string = '';
  comentarioE:string="";

  constructor(private route:ActivatedRoute) {
    this.valor=+route.snapshot.paramMap.get('valor')!  
    this.genero=route.snapshot.paramMap.get('genero')!
    this.edad=+route.snapshot.paramMap.get('edad')!
    this.resultado='';
    this.interpretacion='';
    console.log(`Recibiendo el calculo de IMC: ${this.valor}`);
    console.log(`Recibiendo el calculo de genero: ${this.genero}`);
    console.log(`Recibiendo el calculo de edad: ${this.edad}`);
  }

  ngOnInit():void {
    this.getResultado();
    this.getEdad();
  }

  getResultado(){
    switch (true) {
      case this.valor >= 18.5 && this.valor <= 26.9 && this.genero==='Masculino':
        this.resultado = 'Normal';
        this.interpretacion = 'Tu peso corporal está acorde a tu estatura y peso.';
        this.imagenDeFondo = 'url(' + 'https://www.onlinepersonaltrainer.es/wp-content/uploads/2014/05/Peso-ideal-en-un-hombre-2.jpg' + ')';
        break;

      case this.valor >= 18 && this.valor <= 24.9 && this.genero==='Femenino':
        this.resultado = 'Normal';
        this.interpretacion = 'Tu peso corporal está acorde a tu estatura y peso.';
        this.imagenDeFondo = 'url(' + 'https://estaticos-cdn.prensaiberica.es/clip/4adaac45-8923-4acb-8172-be3eb6244673_woman-libre-1200_default_0.jpg' + ')';
        break;
    
      case this.valor >= 25 && this.valor <= 29.9 && this.genero==='Femenino':
        this.resultado = 'Sobrepeso';
        this.interpretacion = 'Tu peso corporal es alto, por lo que presentas sobrepeso.';
        this.imagenDeFondo = 'url(' + 'https://estaticos-cdn.prensaiberica.es/clip/a889bc66-94d6-4cdb-9f8c-f8bfb179f200_16-9-aspect-ratio_default_0.jpg' + ')';
        break;

      case this.valor >= 27 && this.valor <= 29.9 && this.genero==='Masculino':
          this.resultado = 'Sobrepeso';
          this.interpretacion = 'Tu peso corporal es alto, por lo que presentas sobrepeso.';
          this.imagenDeFondo = 'url(' + 'https://thumbs.dreamstime.com/z/ilustraci%C3%B3n-del-hombre-con-sobrepeso-linda-de-213524220.jpg' + ')';
          break;

          case this.valor >= 30 && this.valor <= 34.9 &&this.genero==='Masculino':
        this.resultado = 'Obesidad I';
        this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado uno.';
        this.imagenDeFondo = 'url(' + 'https://static.vecteezy.com/system/resources/previews/014/209/644/non_2x/overweight-man-in-green-clothes-icon-cartoon-style-vector.jpg' + ')';
        break;
    
      case this.valor >= 30 && this.valor <= 34.9 &&this.genero==='Femenino':
        this.resultado = 'Obesidad I';
        this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado uno.';
        this.imagenDeFondo = 'url(' + 'https://img.freepik.com/foto-gratis/exprimir-grasa-vientre-sobrepeso-cinta-metrica-cuello_1150-34777.jpg?w=740&t=st=1697945739~exp=1697946339~hmac=8a81686fd3d656f926584daad249744e4e16f81d092740c7ff583cebd20f6ede' + ')';
        break;
    
      case this.valor >= 35 && this.valor <= 39.9 && this.genero==='Masculino':
        this.resultado = 'Obesidad II';
        this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado dos.';
        this.imagenDeFondo = 'url(' + 'https://img.freepik.com/foto-gratis/hombre-sobrepeso-haciendo-ejercicio-escaleras-al-aire-libre_23-2149618198.jpg?w=740&t=st=1697945868~exp=1697946468~hmac=894266962cc12cac1e20cde79ada623b241f16ba149ba2d01b16db5e97b0416e' + ')';
        break;
    
        case this.valor >= 35 && this.valor <= 39.9 && this.genero==='Femenino':
          this.resultado = 'Obesidad II';
          this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado dos.';
          this.imagenDeFondo = 'url(' + 'https://bagre.life/wp-content/uploads/2022/08/obesidad.jpg' + ')';
          break;
    
      case this.valor >= 40 && this.genero==='Masculino':
        this.resultado = 'Obesidad III';
        this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado tres. ';
        this.imagenDeFondo = 'url(' + 'https://img.freepik.com/foto-gratis/hombre-sobrepeso-shrt-es-pequeno-barriga-enorme-botones-abiertos_633478-1787.jpg?w=826&t=st=1697945902~exp=1697946502~hmac=956686d5af120182a60bd67d7117a49c0a417c08d359d2a4b48c5b8afa3a3c96' + ')';
        break;
    
        case this.valor >= 40 && this.genero==='Femenino':
          this.resultado = 'Obesidad III';
          this.interpretacion = 'Tu peso corporal es alto, te encuentras en obesidad grado tres. ';
          this.imagenDeFondo = 'url(' + 'https://www.elindependiente.com/wp-content/uploads/2020/06/20200108285db5a42486a2e4728937cb6dacfdbb-656x368.jpg' + ')';
          break;


        case this.valor <=18.4 && this.genero=='Femenino':
        this.resultado = 'Bajo Peso';
        this.interpretacion='Tienes un peso corporal bajo. Te recomendamos tener mejores hábitos alimenticios.'
        this.imagenDeFondo='url('+'https://justo.mx/blog/wp-content/uploads/2022/01/asian-woman-weight-loss-and-diet-concept-2021-08-27-00-04-21-utc.jpg'+')';
        break;


      default:
        this.resultado = 'Bajo peso';
        this.interpretacion = 'Tienes un peso corporal bajo. Te recomendamos tener mejores hábitos alimenticios.';
        this.imagenDeFondo = 'url(' + 'https://img.freepik.com/foto-gratis/cerrar-piernas-maquina-pesas_23-2149177672.jpg?w=740&t=st=1697943776~exp=1697944376~hmac=8e8610a9400a613a63c081079e6668846190f3feef9806b32d19bbf37de9eb57' +')';
        break;
    }
  }
  
  getEdad(){
    if (this.edad <= 12) {
      this.comentarioE = "De acuerdo a tu edad, aún estás en crecimiento. Se recomienda tener un buen horario de sueño y una dieta balanceada.";
    } else if (this.edad >=13 && this.edad<=18){
      this.comentarioE = "De acuerdo a tu edad, te encuentras en tu adolescencia se te recomiendo tener tus tres comidas al dia, hacer ejercicio, comer saludable, beber agua y tener sus ocho horas de sueño.";
    } else if (this.edad >=19 && this.edad<=40){
      this.comentarioE = "De acuerdo a tu edad, te encuentras en la adultez, manten una dieta correcta, realiza ejercicio, evita comidas fritas y/o dulces, no saltes las comidas y recuerda ir al medico constantemente.";
    } else {
      this.comentarioE = 'De acuerdo a tu edad, debes tener chequeos medicos constantes, realiza ejercicio constantemente, recuerda tener una dieta balanceada e hidratarte.';
    }
  }
}
