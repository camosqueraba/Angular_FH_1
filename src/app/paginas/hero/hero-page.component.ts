import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})

export class HeroPageComponent {

  name = signal('Ironman')
  age = signal(45);

  heroDescripcion = computed(() => {
    const descripcion = `${this.name()} - ${this.age()}`;
    return descripcion;
  })  

  changeHero(){
    this.name.set("Spiderman");
    this.age.set(22);
  }

  getHeroDescription(){
    return `${ this.name() } - ${ this.age() }`;
  }

  resetForm(){
    this.name.set("Ironman");
    this.age.set(45);
  }

  chageAge(){
    this.age.set(60);
  }
}
