import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-add',
  imports: [],
  templateUrl: './personaje-add.component.html',
  styleUrl: './personaje-add.component.css'
})
export class PersonajeAddComponent {
  nombreInput = signal("");
  poderInput = signal(0); 

  nuevoPersonajeOutput = output<Personaje>();

  personajes = signal<Personaje[]>([
    {id: 1, nombre: "Goku", poder:9001},
    {id: 2, nombre: "Vegeta", poder:8001}
    
  ]);

  borrarCampos(){
    this.nombreInput.set('');
    this.poderInput.set(0);
  }

  agregaPersonaje(){
    if(this.nombreInput() != '' && this.poderInput() > 0 ){
      
      const nuevoPersonaje: Personaje = {
        id: Math.floor(Math.random() * 1000),
        nombre: this.nombreInput(),
        poder: this.poderInput()
      }

      console.log({nuevoPersonaje})
      //this.personajes.update((list) => [...list, nuevoPersonaje])
      this.nuevoPersonajeOutput.emit(nuevoPersonaje)
      this.borrarCampos();
    }
  }
}
