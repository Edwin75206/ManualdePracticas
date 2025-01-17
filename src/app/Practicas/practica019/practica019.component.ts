import { Component } from '@angular/core';
import { NoticiaService } from './service/noticia.service';

@Component({
  selector: 'app-practica019',
  templateUrl: './practica019.component.html',
  styleUrls: ['./practica019.component.css']
})
export class Practica019Component {


  loading=false;
  listNoticias:any[]=[]

  constructor(private _noticiaService:NoticiaService){

  }

  buscarNoticias(parametros:any){
    console.log('soy el padre')
    this.loading=true;
    this.listNoticias=[];
    setTimeout(()=> {
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      this.loading=false;
      console.log(data);
      this.listNoticias=data.articles;
    }, error=>{
      console.log(error);
      this.loading=false;
    })
  },1000);

  }
}
