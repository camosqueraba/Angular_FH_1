import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterPageComponent {
  counter = 0;
  counterSenal = signal(10);

  constructor(){

    setInterval(() => {
      this.counter += 1;
      this.counterSenal.update((v) => v + 1);
      console.log('Tick');
    }, 2000); 
  }

  aumentarContador(valor:number){
    this.counter += valor;
    this.counterSenal.update((current) => current + valor);
  }

  reiniciarContador(){
    this.counter = 0
  }
}
