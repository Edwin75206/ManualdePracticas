import { Component } from '@angular/core';

@Component({
  selector: 'app-practica010',
  templateUrl: './practica010.component.html',
  styleUrls: ['./practica010.component.css']
})
export class Practica010Component {

  
  listaEstudiantes:any[] = [
    {matricula:"220622", nombre:"Edwin Donovan Castañeda Calderon", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Sobresaliente"},
    {matricula:"220187", nombre:"Oscar Cruz Lopez", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"210687", nombre:"Pamela Rafael Álvarez", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220281", nombre:"Carlos Sandoval Sedeño", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"210308", nombre:"Omar Axel Clemente Perea", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220365", nombre:"Victor Conde Amador", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220006", nombre:"Vicente Jared Cruz Ortega", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Condicional"},
    {matricula:"220291", nombre:"Jonatan Martinez Hernandez", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220124", nombre:"Emmanuel Ortiz Oliver", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220486", nombre:"Rey David Romero Trejo", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Condicional"},
    {matricula:"220520", nombre:"Raul Ponce Guerrero", carrera:"T.S.U T.I E.V.N.D ", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"191025", nombre:"Patricia Romero Garcia", carrera:"LIC T.F.A.R ", 
    gradoygrupo:"7°A", situacionacademica:"Regular"}
    
  ]

    estudiantesVisibles=false;
    
  texto='Mostrar';
 

    
    
  mostrarEstudiantes(): void{
    
        


    if (this.estudiantesVisibles) {
      this.estudiantesVisibles=false;
      this.texto='Mostrar'      
    }
    else{
      this.estudiantesVisibles=true;
      this.texto='Ocultar'
    }

    
  }

}
