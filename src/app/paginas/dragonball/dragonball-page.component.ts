import { Component, signal } from '@angular/core';

interface Personaje {
  id: number,
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})


export class DragonballPageComponent {

  nombreInput = signal("Carlos");
  poderInput = signal(300); 

  personajes = signal<Personaje[]>([
    {id: 1, nombre: "Goku", poder:9001},
    {id: 2, nombre: "Vegeta", poder:8001},
    {id: 3, nombre: "Picolo", poder:7001},
    {id: 4, nombre: "Yancha", poder:500},
  ]);

  borrarCampos(){
    this.nombreInput.set('');
    this.poderInput.set(0);
  }

  agregaPersonaje(){
    if(this.nombreInput() != '' && this.poderInput() > 0 ){
      const nuevoPersonaje: Personaje = {
        id: this.personajes().length + 1,
        nombre: this.nombreInput(),
        poder: this.poderInput()
      }

      this.personajes.update((list) => [...list, nuevoPersonaje])
      this.borrarCampos();
    }
  }

  
}
