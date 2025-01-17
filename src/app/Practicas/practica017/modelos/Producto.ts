export class Producto{
    id:number;
    nombre:string;
    descripcion:string;
    marca:string;
    precio:number;
    categoria:string;


constructor(id:number,nombre:string,descripcion:string,marca:string,precio:number,categoria:string){
    this.id=id;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.marca=marca;
    this.precio=precio;
    this.categoria=categoria;
}

}