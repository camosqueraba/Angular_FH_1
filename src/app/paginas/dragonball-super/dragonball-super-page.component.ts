import { Component, inject} from '@angular/core';
import { PersonajeListComponent } from "../../components/dragonball/personaje-list/personaje-list.component";
import { PersonajeAddComponent } from "../../components/dragonball/personaje-add/personaje-add.component";

import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-super-page',
  imports: [PersonajeListComponent, PersonajeAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})


export class DragonballSuperPageComponent {  
   public dragonballService = inject(DragonballService);
  
}
