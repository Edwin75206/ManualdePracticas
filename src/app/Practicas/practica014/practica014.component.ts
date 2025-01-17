import { Component } from '@angular/core';

@Component({
  selector: 'app-practica014',
  templateUrl: './practica014.component.html',
  styleUrls: ['./practica014.component.css']
})
export class Practica014Component {


  reproduceSonido(nota:string):void{
    let audio = new Audio();  //declarando una variable audio que instancia el objeto audio de Angular
    audio.src='./assets/Sounds/note'+ nota +'.wav'
    audio.load()
    audio.play()
    
  }

  constructor() {
    document.addEventListener("keydown", (event) => {
      const keyPressed: string = event.key; 
      const keyMapping: Record<string, string> = {
        "a": "1",   
        "q": "11",  
        "s": "2",  
        "w": "12", 
        "d": "3",   
        "f": "4",  
        "e": "13", 
        "g": "5",   
        "h": "6",   
        "t": "15",  
        "r": "14",  
        "j": "7"   
      };

      if (keyMapping[keyPressed]) {
        this.reproduceSonido(keyMapping[keyPressed]);
        const keyboard = document.querySelector(`[data-key='${keyPressed}']`);
        if (keyboard) {
          keyboard.classList.add('keyboard');
        }
      
        
      }
    });
    document.addEventListener("keyup", (event) => {
      const keyReleased: string = event.key;

      const keyboard = document.querySelector(`[data-key='${keyReleased}']`);
      if (keyboard) {
        keyboard.classList.remove('keyboard');
      }

      
    });
    
  }
}
