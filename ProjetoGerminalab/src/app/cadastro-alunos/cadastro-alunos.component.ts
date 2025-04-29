import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [],
  templateUrl: './cadastro-alunos.component.html',
  styleUrl: './cadastro-alunos.component.css'
})
export class CadastroAlunosComponent {
  navegarCadastroNotas() {
    window.location.href = '/cadastro-aluno-notas';
  }
}
