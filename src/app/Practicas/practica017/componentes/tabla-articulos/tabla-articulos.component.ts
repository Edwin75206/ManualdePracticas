import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../modelos/Producto';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent {
  @Input() listaProductos:Producto[];
  @Input() categoriaSeleccionada:string;
  @Output() emisorcambioCategoria = new EventEmitter<string>();


  constructor(){
    this.listaProductos=[];
    this.categoriaSeleccionada='Todas'
  }

  ngOnInit() {
    this.listaProductos.forEach(Producto => console.log(`Producto id:${Producto.id}, nombre:${Producto.nombre}`));
  }

}
