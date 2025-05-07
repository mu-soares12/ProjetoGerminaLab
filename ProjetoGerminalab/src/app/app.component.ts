import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MenuVerticalComponent } from "./menu-vertical/menu-vertical.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MenuVerticalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoGerminalab';
}
