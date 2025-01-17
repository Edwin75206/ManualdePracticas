import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {

  @Input() listNoticias:any;

  constructor(){

  }
  /*
  cond(){
    if(this.listNoticias.urlToImage){
    src='../../../../../../assets/imgs/null.jpg'
    }
  }*/


}
