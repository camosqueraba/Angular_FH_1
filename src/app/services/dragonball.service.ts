import { effect, Injectable, signal } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";


const cargarDesdeLocalStorage = (): Personaje[] => {
  const personajes = localStorage.getItem("personajes");
  return personajes ? JSON.parse(personajes) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService{
  
  personajes = signal<Personaje[]>(cargarDesdeLocalStorage());

  guardarEnLocalStorage = effect(()=>{
    localStorage.setItem("personajes", JSON.stringify(this.personajes()));
  })
  
  agregarPersonaje(personaje: Personaje){
    this.personajes.update((list) => [...list, personaje]);
  }
      
 
      
}