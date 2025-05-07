import { Component } from '@angular/core';

@Component({
  selector: 'app-laboratorio-germinare',
  imports: [],
  templateUrl: './laboratorio-germinare.component.html',
  styleUrl: './laboratorio-germinare.component.css'
})
export class LaboratorioGerminareComponent {
  redirecionarLogin() {
    window.location.href = '/login';
  }

  redirecionarGraficos() {
    window.location.href = '/graficos';
  }
}