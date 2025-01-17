import { Component } from '@angular/core';
import{faCoffee, faTractor, faCarrot, faBusinessTime, faPenToSquare, faTruckPlane,
   faRobot, faAutomobile, faIndustry, faGasPump, faPersonBreastfeeding, faLaptop, faDna, faBowlFood} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-practica013',
  templateUrl: './practica013.component.html',
  styleUrls: ['./practica013.component.css']
})
export class Practica013Component {


  listaEstudiantes:any[] = [
    {matricula:"220622", nombre:"Edwin Donovan Castañeda Calderon", carrera:"TSU PAL", 
    gradoygrupo:"4°A", situacionacademica:"Sobresaliente"},
    {matricula:"220187", nombre:"Oscar Cruz Lopez", carrera:"TSU QAB", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"210687", nombre:"Pamela Rafael Álvarez", carrera:"TSU AACH", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220281", nombre:"Carlos Sandoval Sedeño", carrera:"TSU TIEVND", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"210308", nombre:"Vito Corleone Amador", carrera:"TSU OCEANI", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"210308", nombre:"Omar Axel Clemente Perea", carrera:"TSU MAA", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220365", nombre:"Victor Conde Amador", carrera:"TSU SA", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220006", nombre:"Vicente Jared Cruz Ortega", carrera:"TSU MAI", 
    gradoygrupo:"4°A", situacionacademica:"Condicional"},
    {matricula:"220291", nombre:"Jonatan Martinez Hernandez", carrera:"TSU MAP", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220124", nombre:"Emmanuel Ortiz Oliver", carrera:"LIC TFAR", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"220486", nombre:"Rey David Romero Trejo", carrera:"TSU DSM", 
    gradoygrupo:"4°A", situacionacademica:"Condicional"},
    {matricula:"220520", nombre:"Raul Ponce Guerrero", carrera:"TSU ASP", 
    gradoygrupo:"4°A", situacionacademica:"Regular"},
    {matricula:"236982", nombre:"Patricia Romero Garcia", carrera:"TSU GASTRO", 
    gradoygrupo:"7°A", situacionacademica:"Regular"},
    {matricula:"200685", nombre:"Karla Yuleni Balderas", carrera:"ING BIO", 
    gradoygrupo:"7°A", situacionacademica:"Regular"},
    {matricula:"216690", nombre:"Emilio Salas Alvarado", carrera:"ING PAL", 
    gradoygrupo:"7°A", situacionacademica:"Sobresaliente"},
    {matricula:"206548", nombre:"Marco Alvarado Cazarez", carrera:"LIC MECA", 
    gradoygrupo:"7°A", situacionacademica:"Caso Critico"},
    {matricula:"206875", nombre:"Pamela Rafael Franco", carrera:"ING MA", 
    gradoygrupo:"7°A", situacionacademica:"Regular"},
    {matricula:"196685", nombre:"Gonzalo Vargas Amador", carrera:"LIC FT", 
    gradoygrupo:"7°A", situacionacademica:"Sobresaliente"},
    {matricula:"188965", nombre:"Jorge de Jesus Antonio", carrera:"LIC GCH", 
    gradoygrupo:"7°A", situacionacademica:"Caso Critico"},
    {matricula:"179544", nombre:"Jonathan Alvarado Peralta", carrera:"ING DGS", 
    gradoygrupo:"7°A", situacionacademica:"Regular"},
    {matricula:"191025", nombre:"Yureli Martinez Martinez", carrera:"ING EVND", 
    gradoygrupo:"7°A", situacionacademica:"Sobrtesaliente"}
    
  ]

    estudiantesVisibles=false;
    
  texto='Mostrar';
 

    
    
  mostrarEstudiantes(): void{
    
      let  estiloCarrera = ''
   
   




    if (this.estudiantesVisibles) {
      this.estudiantesVisibles=false;
      this.texto='Mostrar'      
    }
    else{
      this.estudiantesVisibles=true;
      this.texto='Ocultar'
    }

    
  }

  faPenToSquare = faPenToSquare;
  faBusinessTime = faBusinessTime;
  faCoffee = faCoffee;
  faTractor = faTractor;
  faCarrot = faCarrot;
  faTruckPlane = faTruckPlane;
  faRobot = faRobot;
  faAutomobile = faAutomobile;
  faIndustry = faIndustry;
  faGasPump = faGasPump;
  faPersonBreastfeeding = faPersonBreastfeeding;
  faLaptop = faLaptop;
  faDna = faDna;
  faBowlFood = faBowlFood;
  
  iconocarrera:string="sinicono";
}
