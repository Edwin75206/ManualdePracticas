import { Component } from '@angular/core';
import { ClimaService } from '../../servicios/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  urlImagen="https://static.vecteezy.com/system/resources/previews/021/683/693/non_2x/cloudy-sun-behind-cloud-cute-weather-realistic-icon-3d-cartoon-vector.jpg";

  ciudad='';
  temperatura=0;
  humedad=0;
  query=false;
  clima='';

  mostrarError=false;
  loading=false;
  constructor(private _climaService: ClimaService){

  }

  obtenerclima(){
    this.loading=true;
console.log(this.ciudad)

this._climaService.getClima(this.ciudad).subscribe(data=>{
  console.log(data)
  this.query=true;
  this.temperatura=data.main.temp-273;
  this.humedad=data.main.humidity
  this.clima=data.weather[0].main
  this.loading=false;
},error=>{
  console.log(error)
  this.loading=false;
  this.error();
})
  }

  error(){
    this.mostrarError=true;
    setTimeout(()=>{
      this.mostrarError=false;
      this.ciudad='';
    },3000)
  }
}
