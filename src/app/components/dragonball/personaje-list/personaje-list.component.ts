import { Component, input } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje-list',
  imports: [],
  templateUrl: './personaje-list.component.html',
  styleUrl: './personaje-list.component.css'
})
export class PersonajeListComponent {
  personajes = input.required<Personaje[]>();

}
