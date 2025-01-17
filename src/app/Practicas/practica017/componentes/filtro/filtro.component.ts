import { Component,Output,EventEmitter, Input } from '@angular/core';
import { Producto } from '../../modelos/Producto'

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  @Input() totalProductos:number;
  @Input() totalElectronicos:number;
  @Input() totalRopa:number;
  @Input() totalJuguetes:number;
  @Input() totalAlimentos:number;
  @Input() totalBebidas:number;
  @Input() categoriaSeleccionada:string;
  @Output() emisorcambioCategoria = new EventEmitter<string>();

  categorias:string[]=["Electrónicos", "Ropa", "Juguetes", "Alimentos", "Bebidas", "Todas"];
  

  constructor(){
    this.totalProductos=0;
    this.totalElectronicos=0;
    this.totalRopa=0;
    this.totalJuguetes=0;
    this.totalAlimentos=0;
    this.totalBebidas=0
    this.categoriaSeleccionada='Todas';
    console.log(`El total de los productos es: ${this.totalProductos}`)
    
  }

  cambiaCategoria():void{
    this.emisorcambioCategoria.emit(this.categoriaSeleccionada)
  }

}
