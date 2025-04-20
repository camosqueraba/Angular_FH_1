import { Routes } from '@angular/router';
import { CounterPageComponent } from './paginas/counter/counter-page.component';
import { HeroPageComponent } from './paginas/hero/hero-page.component';
import { DragonballPageComponent } from './paginas/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './paginas/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
    { path : '', 
      component: CounterPageComponent  
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
      path: 'dragonball',
      component: DragonballPageComponent
    },
    {
      path: 'dragonball-super',
      component: DragonballSuperPageComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
];
