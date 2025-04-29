import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { MenuVerticalComponent } from "./menu-vertical/menu-vertical.component";
import { LoginComponent } from './login/login.component';
import { LaboratorioGerminareComponent } from './laboratorio-germinare/laboratorio-germinare.component'
import { GraficoComponent } from './grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, MenuVerticalComponent, LoginComponent, LaboratorioGerminareComponent, GraficoComponent, HomeComponent, TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetoGerminalab';
}
