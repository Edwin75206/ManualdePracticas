import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarnoticias',
  templateUrl: './navbarnoticias.component.html',
  styleUrls: ['./navbarnoticias.component.css']
})
export class NavbarnoticiasComponent {

  @Input() titulo:String;
  constructor(){
    this.titulo='';
  }
}
