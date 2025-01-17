import { Component } from '@angular/core';

@Component({
  selector: 'app-practica015',
  templateUrl: './practica015.component.html',
  styleUrls: ['./practica015.component.css']
})
export class Practica015Component {
  
  cantidad: number = 0.0;     
  divisaOrigen: string = "us";   
  divisaDestino: string = "mx"; 
  total: number = 0.0;          
  formatoMonedaOrigen = "MX$";   
  formatoMonedaDestino = "US$";   
  divisaSeleccionadaOrigen: any;
  divisaSeleccionadaDestino: any;
  
  divisas = [
    { label: 'Peso mexicano (MX$)', value: 'mx'},
    { label: 'Dólar estadounidense (US$)', value: 'us'},
    { label: 'Dólar canadiense (CA$)', value: 'ca'},
    { label: 'Rial Omani (BH$)', value: 'bh'},
    { label: 'Dinar Jordano (JO$)', value: 'jo'},
    { label: 'Dólas de las Islas Caiman (KY$)', value: 'ky'}
  ];
  
  constructor() {
    this.divisaOrigen = 'us';
    this.divisaDestino = 'mx'; 
  }
  
  ngOnInit() {
    this.onDivisaOrigenChange();
    this.onDivisaDestinoChange();
  }
  
  onDivisaOrigenChange() {
    this.divisaSeleccionadaOrigen = this.divisas.find(divisa => divisa.value === this.divisaOrigen);
  }
  
  onDivisaDestinoChange() {
    this.divisaSeleccionadaDestino = this.divisas.find(divisa => divisa.value === this.divisaDestino);
  }
  
  
  
  obtenerSimboloMoneda(divisa: string): string {
    const simbolosMoneda: { [key: string]: string } = {
      'mx': 'MX$',     
      'us': 'US$',     
      'ca': 'CA$',     
      'bh': 'BH$',    
      'jo': 'JO$',    
      'ky': 'KY$'
    };
    return simbolosMoneda[divisa] || "";
  }
  
  valorConversionDolar:number[]=[18.07, 1.0, 1.36, 0.38, 0.71, 0.83];
  valorConversionPeso:number[]=[1.0, 0.056, 0.076, 0.021, 0.039, 0.046];
  valorConversionDCanada:number[]=[13.11, 0.74, 1.0, 0.28, 0.52, 0.61];
  valorConversionRial:number[]=[47.44, 2.60, 3.57, 1.0, 1.84, 2.17];
  valorConversionDJordano:number[]=[25.75, 1.41, 1.94,0.54 , 1.0, 1.18];
  valorConversionDIslas:number[]=[21.92, 1.20, 1.65, 0.46, 0.85, 1.0];
  
  convertir() {
    const indiceOrigen = this.divisas.findIndex(divisa => divisa.value === this.divisaOrigen);
    const indiceDestino = this.divisas.findIndex(divisa => divisa.value === this.divisaDestino);
  
    if (indiceOrigen !== -1 && indiceDestino !== -1) {
      if (this.divisaOrigen === 'mx') { 
        this.total = this.cantidad * this.valorConversionPeso[indiceDestino];
      } else if (this.divisaOrigen === 'us') { 
        this.total = this.cantidad * this.valorConversionDolar[indiceDestino];
      } else if (this.divisaOrigen === 'ca') { 
        this.total = this.cantidad * this.valorConversionDCanada[indiceDestino];
      } else if (this.divisaOrigen === 'bh') {  
        this.total = this.cantidad * this.valorConversionRial[indiceDestino];
      } else if (this.divisaOrigen === 'jo') { 
        this.total = this.cantidad * this.valorConversionDJordano[indiceDestino];
      } else if (this.divisaOrigen === 'ky') { 
        this.total = this.cantidad * this.valorConversionDIslas[indiceDestino];
      }
    } else {
      this.total = 0; 
    }
  }  




    /*console.log(`Estoy intentando convertir: ${this.formatoMonedaOrigen} ${this.cantidad} a ${this.formatoMonedaDestino} ${this.total}`);
    this.total = this.cantidad * this.valorConversion[1];

    if (this.formatoMonedaOrigen!=this.formatoMonedaDestino[0] && this.formatoMonedaDestino!=this.divisas[0]) {
      let posOrigen = this.divisas.indexOf(this.formatoMonedaOrigen)
      let totalParcial = this.cantidad*this.valorConversion[posOrigen]
      let posDestino = this.divisas.indexOf(this.formatoMonedaDestino)
      this.total=totalParcial/this.valorConversion[posDestino]
    }*/

   /* if (this.formatoMonedaOrigen==this.divisas[0]||this.formatoMonedaDestino==this.divisas[0]) //Esta validacion verifica que si la moneda origen o la moneda destino son pesos mexicanos haga la conversion
    { */
    //  console.log(`O la divisa origen o la divisa destino son: ${this.descripcionMoneda[0]}`)
   /* let pos = this.divisas.indexOf(this.formatoMonedaDestino)
    this.total=this.cantidad*this.valorConversion[pos];
    }*/
    
  
    //console.log(`${this.cantidad * this.valorConversion[2]}`)
  }
  
  
  
