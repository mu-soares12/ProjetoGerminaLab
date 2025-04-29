import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  students = [
    { nome: 'João', media: 8 },
    { nome: 'Maria', media: 6 },
    { nome: 'Carlos', media: 7.5 }
  ];

}
