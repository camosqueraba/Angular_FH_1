import { Component } from '@angular/core';
import { SideMenuComponent } from "../../componentes/side-menu/side-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})

export default class DashboardPageComponent {

}
